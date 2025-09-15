import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./Blog.css";
import { GrArticle } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("All");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const snapshot = await getDocs(collection(db, "posts"));
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false); // Stop loading after fetch
            }
        };

        fetchPosts();
    }, []);

    const topics = ["All", ...new Set(posts.map((post) => post.topic))];
    const filteredPosts =
        selectedTopic === "All"
            ? posts
            : posts.filter((p) => p.topic === selectedTopic);

    // if (loading) {
    //     return <div className="blog-container">Loading blog posts...</div>;
    // }

    if (loading) {
        return <div className="spinner"></div>;
    }

    return (
        <div className="blog-container">
            <div className="menu">
                <div className="menu-button">
                    <GrArticle /> Posts
                </div>
                <div className="menu-dropdown">
                    {topics.map((topic) => (
                        <div
                            key={topic}
                            className={
                                selectedTopic === topic ? "selected-topic" : ""
                            }
                            onClick={() => setSelectedTopic(topic)}
                        >
                            {topic}
                        </div>
                    ))}
                </div>
            </div>

            <h1>DUY</h1>
            <h2>Explore Learn Build 🚀</h2>

            <div className="post-grid">
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        className="post-card"
                        onClick={() => navigate(`/blog/${post.id}`)}
                    >
                        <div className="post-topic">{post.topic}</div>
                        <div className="post-title">{post.title}</div>
                        <div className="post-description">
                            {post.description}
                        </div>
                        <div className="post-footer">
                            <span>{post.readTime}</span>
                            <span className="read-more">Read More →</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
