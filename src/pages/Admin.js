import React, { useState, useEffect } from "react";
import "./Admin.css";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { db } from "../firebase";

// Modal component using pure ReactJS
import Modal from "../components/Modal";

import { useRef } from "react";
import TiptapEditor from "../components/TiptapEditor";
import { CiUser } from "react-icons/ci";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImBlog } from "react-icons/im";

const Admin = () => {
    const [activeTab, setActiveTab] = useState("users");

    // Users
    const [users, setUsers] = useState([]);
    const [isUserModalOpen, setUserModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    // Projects
    const [projects, setProjects] = useState([]);
    const [isProjectModalOpen, setProjectModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null); // { type: 'user' | 'project' | 'post', id: string }
    const [userErrors, setUserErrors] = useState({});
    const [projectErrors, setProjectErrors] = useState({});
    const [postErrors, setPostErrors] = useState({});

    // Inside your component
    const fileInputRef = useRef(null);
    const projectFileInputRef = useRef(null);
    const postFileInputRef = useRef(null);

    const confirmDelete = (type, id) => {
        setItemToDelete({ type, id });
        setConfirmModalOpen(true);
    };

    const handleConfirmedDelete = async () => {
        if (!itemToDelete) return;

        const { type, id } = itemToDelete;
        if (type === "user") await deleteUser(id);
        else if (type === "project") await deleteProject(id);
        else if (type === "post") await deletePost(id);

        setConfirmModalOpen(false);
        setItemToDelete(null);
    };

    // Posts
    const [posts, setPosts] = useState([]);
    const [isPostModalOpen, setPostModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState(null);

    // Fetch data
    const fetchUsers = async () => {
        const snapshot = await getDocs(collection(db, "users"));
        setUsers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    const fetchProjects = async () => {
        const snapshot = await getDocs(collection(db, "projects"));
        setProjects(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
    };

    const fetchPosts = async () => {
        const snapshot = await getDocs(collection(db, "posts"));
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    useEffect(() => {
        fetchUsers();
        fetchProjects();
        fetchPosts();
    }, []);

    // Modal handlers
    const openUserModal = (user = null) => {
        setEditingUser(
            user || {
                username: "",
                email: "",
                password: "",
                role: "",
                photo: "",
            }
        );
        setUserErrors({}); // Clear previous errors
        setUserModalOpen(true);
    };

    const openProjectModal = (project = null) => {
        setEditingProject(
            project || {
                name: "",
                photo: "",
                description: "",
                github: "",
                demo: "",
            }
        );
        setProjectErrors({});
        setProjectModalOpen(true);
    };

    const openPostModal = (post = null) => {
        setEditingPost(
            post || {
                title: "",
                image: "",
                description: "",
                topic: "",
                tags: "",
                content: "",
            }
        );
        setPostErrors({});
        setPostModalOpen(true);
    };

    // // Save handlers
    // const saveUser = async () => {
    //     if (editingUser.id) {
    //         await updateDoc(doc(db, "users", editingUser.id), editingUser);
    //     } else {
    //         await addDoc(collection(db, "users"), editingUser);
    //     }
    //     setUserModalOpen(false);
    //     fetchUsers();
    // };

    const saveUser = async () => {
        const errors = {};

        if (!editingUser.username)
            errors.username = "Please enter username information";
        if (!editingUser.email) errors.email = "Please enter email information";
        if (!editingUser.password)
            errors.password = "Please enter password information";
        if (!editingUser.role) errors.role = "Please select a role";

        setUserErrors(errors);

        if (Object.keys(errors).length > 0) return; // Stop if there are errors

        if (editingUser.id) {
            await updateDoc(doc(db, "users", editingUser.id), editingUser);
        } else {
            await addDoc(collection(db, "users"), editingUser);
        }

        setUserModalOpen(false);
        fetchUsers();
        setUserErrors({});
    };

    const saveProject = async () => {
        const errors = {};

        if (!editingProject.name) errors.name = "Please enter project name";
        if (!editingProject.description)
            errors.description = "Please enter description";
        if (!editingProject.github) errors.github = "Please enter GitHub link";
        if (!editingProject.demo) errors.demo = "Please enter demo link";

        setProjectErrors(errors);
        if (Object.keys(errors).length > 0) return;

        if (editingProject.id) {
            await updateDoc(
                doc(db, "projects", editingProject.id),
                editingProject
            );
        } else {
            await addDoc(collection(db, "projects"), editingProject);
        }

        setProjectModalOpen(false);
        fetchProjects();
        setProjectErrors({});
    };

    const savePost = async () => {
        const errors = {};

        if (!editingPost.title) errors.title = "Please enter title";
        if (!editingPost.description)
            errors.description = "Please enter description";
        if (!editingPost.topic) errors.topic = "Please enter topic";
        if (!editingPost.tags) errors.tags = "Please enter tags";
        if (!editingPost.content) errors.content = "Please enter content";

        setPostErrors(errors);
        if (Object.keys(errors).length > 0) return;

        if (editingPost.id) {
            await updateDoc(doc(db, "posts", editingPost.id), editingPost);
        } else {
            await addDoc(collection(db, "posts"), editingPost);
        }

        setPostModalOpen(false);
        fetchPosts();
        setPostErrors({});
    };

    // Delete handlers
    const deleteUser = async (id) => {
        await deleteDoc(doc(db, "users", id));
        fetchUsers();
    };

    const deleteProject = async (id) => {
        await deleteDoc(doc(db, "projects", id));
        fetchProjects();
    };

    const deletePost = async (id) => {
        await deleteDoc(doc(db, "posts", id));
        fetchPosts();
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="admin-tabs">
                <button
                    onClick={() => setActiveTab("users")}
                    className={activeTab === "users" ? "active" : ""}
                >
                    <CiUser /> Users
                </button>
                <button
                    onClick={() => setActiveTab("projects")}
                    className={activeTab === "projects" ? "active" : ""}
                >
                    <AiOutlineFundProjectionScreen /> Projects
                </button>
                <button
                    onClick={() => setActiveTab("posts")}
                    className={activeTab === "posts" ? "active" : ""}
                >
                    <ImBlog /> Blog Posts
                </button>
            </div>

            <div className="admin-content">
                {activeTab === "users" && (
                    <>
                        <h2>Manage Users</h2>
                        <button onClick={() => openUserModal()}>
                            Add User
                        </button>
                        <table>
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Role</th>
                                    <th>Photo</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => (
                                    <tr key={u.id}>
                                        <td>{u.username}</td>
                                        <td>{u.email}</td>
                                        <td>{u.password}</td>
                                        <td>{u.role}</td>
                                        <td>
                                            <img
                                                src={u.photo}
                                                alt="user"
                                                width="50"
                                            />
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => openUserModal(u)}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    confirmDelete("user", u.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}

                {activeTab === "projects" && (
                    <>
                        <h2>Manage Projects</h2>
                        <button onClick={() => openProjectModal()}>
                            Add Project
                        </button>
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Photo</th>
                                    <th>Description</th>
                                    <th>GitHub</th>
                                    <th>Demo</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((p) => (
                                    <tr key={p.id}>
                                        <td>{p.name}</td>
                                        <td>
                                            <img
                                                src={p.photo}
                                                alt="project"
                                                width="50"
                                            />
                                        </td>
                                        <td>{p.description}</td>
                                        <td>
                                            <a href={p.github}>GitHub</a>
                                        </td>
                                        <td>
                                            <a href={p.demo}>Demo</a>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    openProjectModal(p)
                                                }
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    deleteProject(p.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}

                {activeTab === "posts" && (
                    <>
                        <h2>Manage Blog Posts</h2>
                        <button onClick={() => openPostModal()}>
                            Add Post
                        </button>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Topic</th>
                                    <th>Tags</th>
                                    <th>Content</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((p) => (
                                    <tr key={p.id}>
                                        <td>{p.title}</td>
                                        <td>
                                            <img
                                                src={p.image}
                                                alt="post"
                                                width="50"
                                            />
                                        </td>
                                        <td>{p.description}</td>
                                        <td>{p.topic}</td>
                                        <td>{p.tags}</td>
                                        <td>
                                            <div
                                                style={{
                                                    maxHeight: "100px",
                                                    overflow: "auto",
                                                }}
                                            >
                                                {p.content}
                                            </div>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => openPostModal(p)}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => deletePost(p.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>

            {/* User Modal */}
            <Modal
                isOpen={isUserModalOpen}
                onClose={() => setUserModalOpen(false)}
                title={editingUser?.id ? "Edit User" : "Add User"}
                footer={<button onClick={saveUser}>Save</button>}
            >
                <div className="form-row">
                    <label>Username</label>
                    <input
                        type="text"
                        value={editingUser?.username || ""}
                        onChange={(e) =>
                            setEditingUser({
                                ...editingUser,
                                username: e.target.value,
                            })
                        }
                    />
                    {userErrors.username && (
                        <span className="error-message">
                            {userErrors.username}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Email</label>
                    <input
                        type="email"
                        value={editingUser?.email || ""}
                        onChange={(e) =>
                            setEditingUser({
                                ...editingUser,
                                email: e.target.value,
                            })
                        }
                    />
                    {userErrors.email && (
                        <span className="error-message">
                            {userErrors.email}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Password</label>
                    <input
                        type="password"
                        value={editingUser?.password || ""}
                        onChange={(e) =>
                            setEditingUser({
                                ...editingUser,
                                password: e.target.value,
                            })
                        }
                    />
                    {userErrors.password && (
                        <span className="error-message">
                            {userErrors.password}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Role</label>
                    <select
                        value={editingUser?.role || ""}
                        onChange={(e) =>
                            setEditingUser({
                                ...editingUser,
                                role: e.target.value,
                            })
                        }
                    >
                        <option value="">Select Role</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                    {userErrors.role && (
                        <span className="error-message">{userErrors.role}</span>
                    )}
                </div>

                <div className="form-row">
                    <label>Photo</label>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setEditingUser({
                                            ...editingUser,
                                            photo: reader.result,
                                        });
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                        {editingUser?.photo && (
                            <button
                                type="button"
                                className="cancel-photo-button"
                                onClick={() => {
                                    setEditingUser({
                                        ...editingUser,
                                        photo: "",
                                    });
                                    if (fileInputRef.current) {
                                        fileInputRef.current.value = ""; // Reset file input
                                    }
                                }}
                            >
                                Remove Photo
                            </button>
                        )}
                    </div>

                    {editingUser?.photo && (
                        <img
                            src={editingUser.photo}
                            alt="Preview"
                            className="preview-image"
                        />
                    )}
                </div>
            </Modal>

            {/* Project Modal */}
            <Modal
                isOpen={isProjectModalOpen}
                onClose={() => setProjectModalOpen(false)}
                title={editingProject?.id ? "Edit Project" : "Add Project"}
                footer={<button onClick={saveProject}>Save</button>}
            >
                <div className="form-row">
                    <label>Project Name</label>
                    <input
                        type="text"
                        value={editingProject?.name || ""}
                        onChange={(e) =>
                            setEditingProject({
                                ...editingProject,
                                name: e.target.value,
                            })
                        }
                    />
                    {projectErrors.name && (
                        <span className="error-message">
                            {projectErrors.name}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Description</label>
                    <input
                        type="text"
                        value={editingProject?.description || ""}
                        onChange={(e) =>
                            setEditingProject({
                                ...editingProject,
                                description: e.target.value,
                            })
                        }
                    />
                    {projectErrors.description && (
                        <span className="error-message">
                            {projectErrors.description}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>GitHub Link</label>
                    <input
                        type="url"
                        value={editingProject?.github || ""}
                        onChange={(e) =>
                            setEditingProject({
                                ...editingProject,
                                github: e.target.value,
                            })
                        }
                    />
                    {projectErrors.github && (
                        <span className="error-message">
                            {projectErrors.github}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Demo Link</label>
                    <input
                        type="url"
                        value={editingProject?.demo || ""}
                        onChange={(e) =>
                            setEditingProject({
                                ...editingProject,
                                demo: e.target.value,
                            })
                        }
                    />
                    {projectErrors.demo && (
                        <span className="error-message">
                            {projectErrors.demo}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Photo</label>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            ref={projectFileInputRef}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setEditingProject({
                                            ...editingProject,
                                            photo: reader.result,
                                        });
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />

                        {editingProject?.photo && (
                            <button
                                type="button"
                                className="cancel-photo-button"
                                onClick={() => {
                                    setEditingProject({
                                        ...editingProject,
                                        photo: "",
                                    });

                                    if (projectFileInputRef.current) {
                                        projectFileInputRef.current.value = ""; // Reset file input
                                    }
                                }}
                            >
                                Remove Photo
                            </button>
                        )}
                    </div>
                    {editingProject?.photo && (
                        <img
                            src={editingProject.photo}
                            alt="Preview"
                            className="preview-image"
                        />
                    )}
                </div>
            </Modal>

            {/* Post Modal */}
            <Modal
                isOpen={isPostModalOpen}
                onClose={() => setPostModalOpen(false)}
                title={editingPost?.id ? "Edit Post" : "Add Post"}
                footer={<button onClick={savePost}>Save</button>}
            >
                <div className="form-row">
                    <label>Title</label>
                    <input
                        type="text"
                        value={editingPost?.title || ""}
                        onChange={(e) =>
                            setEditingPost({
                                ...editingPost,
                                title: e.target.value,
                            })
                        }
                    />
                    {postErrors.title && (
                        <span className="error-message">
                            {postErrors.title}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Description</label>
                    <input
                        type="text"
                        value={editingPost?.description || ""}
                        onChange={(e) =>
                            setEditingPost({
                                ...editingPost,
                                description: e.target.value,
                            })
                        }
                    />
                    {postErrors.description && (
                        <span className="error-message">
                            {postErrors.description}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Topic</label>
                    <input
                        type="text"
                        value={editingPost?.topic || ""}
                        onChange={(e) =>
                            setEditingPost({
                                ...editingPost,
                                topic: e.target.value,
                            })
                        }
                    />
                    {postErrors.topic && (
                        <span className="error-message">
                            {postErrors.topic}
                        </span>
                    )}
                </div>

                <div className="form-row">
                    <label>Tags</label>
                    <input
                        type="text"
                        value={editingPost?.tags || ""}
                        onChange={(e) =>
                            setEditingPost({
                                ...editingPost,
                                tags: e.target.value,
                            })
                        }
                    />
                    {postErrors.tags && (
                        <span className="error-message">{postErrors.tags}</span>
                    )}
                </div>

                <div className="form-row">
                    <label>Image</label>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            ref={postFileInputRef}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setEditingPost({
                                            ...editingPost,
                                            image: reader.result,
                                        });
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />

                        {editingPost?.image && (
                            <button
                                type="button"
                                className="cancel-photo-button"
                                onClick={() => {
                                    setEditingPost({
                                        ...editingPost,
                                        image: "",
                                    });

                                    if (postFileInputRef.current) {
                                        postFileInputRef.current.value = ""; // Reset file input
                                    }
                                }}
                            >
                                Remove Image
                            </button>
                        )}
                    </div>
                    {editingPost?.image && (
                        <img
                            src={editingPost.image}
                            alt="Preview"
                            className="preview-image"
                        />
                    )}
                </div>

                <div className="form-row">
                    <label>Content</label>
                    <TiptapEditor
                        content={editingPost?.content || ""}
                        onChange={(value) =>
                            setEditingPost({ ...editingPost, content: value })
                        }
                    />
                    {postErrors.content && (
                        <span className="error-message">
                            {postErrors.content}
                        </span>
                    )}
                </div>
            </Modal>

            {/* Delete Modal */}
            <Modal
                isOpen={isConfirmModalOpen}
                onClose={() => setConfirmModalOpen(false)}
                title="Confirm Deletion"
                footer={
                    <>
                        <button onClick={handleConfirmedDelete}>Yes</button>
                        <button onClick={() => setConfirmModalOpen(false)}>
                            No
                        </button>
                    </>
                }
            >
                <p>
                    Are you sure you want to delete this {itemToDelete?.type}?
                </p>
            </Modal>
        </div>
    );
};

export default Admin;
