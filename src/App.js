import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

function AppContent() {
    const { darkMode } = useTheme();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         setIsAuthenticated(user?.email === "haricoder17@gmail.com");
    //     });
    // }, []);

    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);

            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    const userData = userDocSnap.data();
                    setIsAdmin(userData.role === "Admin");
                } else {
                    setIsAdmin(false);
                }
            } else {
                setIsAdmin(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className={`app-container ${darkMode ? "dark" : "light"}`}>
            <Router>
                <ScrollToTop />
                <Navbar
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                    isAdmin={isAdmin}
                />

                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<PostDetail />} />
                        <Route path="/login" element={<Login />} />
                        {/* <Route path="/admin" element={<Admin />} /> */}
                        <Route
                            path="/admin"
                            // element={isAuthenticated ? <Admin /> : <Login />}
                            element={isAdmin ? <Admin /> : <Login />}
                        />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;
