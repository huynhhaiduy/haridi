import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase"; // Make sure this path is correct
import "./Login.css";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { signOut } from "firebase/auth";

const Login = () => {
    const [activeTab, setActiveTab] = useState("login");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // const handleLogin = async () => {
    //     try {
    //         const userCredential = await signInWithEmailAndPassword(
    //             auth,
    //             loginEmail,
    //             loginPassword
    //         );
    //         const user = userCredential.user;
    //         if (user.email === "haricoder17@gmail.com") {
    //             navigate("/admin");
    //         } else {
    //             setError("Access denied. You are not the admin.");
    //         }
    //     } catch (err) {
    //         setError("Login failed. Please check your credentials.");
    //     }
    // };

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            const user = userCredential.user;

            // Fetch user role from Firestore
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                console.log(userData); // helpful for debugging
                if (userData.role === "Admin") {
                    navigate("/admin");
                } else {
                    setError("Access denied. You are not an admin.");
                }
            } else {
                setError("User data not found in Firestore.");
            }
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };

    // const handleRegister = async () => {
    //     try {
    //         await createUserWithEmailAndPassword(
    //             auth,
    //             registerEmail,
    //             registerPassword
    //         );
    //         alert("Registration successful! You can now log in.");
    //         setActiveTab("login");
    //     } catch (err) {
    //         setError("Registration failed. Email may already be in use.");
    //     }
    // };

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            const user = userCredential.user;

            // Create Firestore user document
            await setDoc(doc(db, "users", user.uid), {
                email: registerEmail,
                role: "User", // or "Admin" if you want to allow selection
                username: "",
                photo: "",
                password: registerPassword, // optional, not recommended to store
            });

            alert("Registration successful! You can now log in.");
            setActiveTab("login");
        } catch (err) {
            setError("Registration failed. Email may already be in use.");
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div className="login-container">
            <h2>Welcome to Admin Portal</h2>
            <div className="tabs">
                <button
                    className={activeTab === "login" ? "active" : ""}
                    onClick={() => setActiveTab("login")}
                >
                    Login
                </button>
                <button
                    className={activeTab === "register" ? "active" : ""}
                    onClick={() => setActiveTab("register")}
                >
                    Register
                </button>
            </div>

            {activeTab === "login" && (
                <div className="form">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <div className="forgot-password">Forgot password?</div>
                    <button onClick={handleLogin}>Login</button>
                    {error && <div className="error">{error}</div>}
                </div>
            )}

            {activeTab === "register" && (
                <div className="form">
                    <input
                        type="text"
                        placeholder="Email or Username"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                    <button onClick={handleRegister}>Register</button>
                    {error && <div className="error">{error}</div>}
                </div>
            )}
        </div>
    );
};

export default Login;
