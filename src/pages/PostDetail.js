import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./PostDetail.css";

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [headings, setHeadings] = useState([]);
    const contentRef = useRef(null);

    // Function to inject IDs into headings
    const injectHeadingIds = (html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const headingElements = doc.querySelectorAll("h2, h3");
        const headingList = [];

        headingElements.forEach((el, index) => {
            const headingId = `heading-${index}`;
            el.setAttribute("id", headingId);
            headingList.push({
                id: headingId,
                text: el.textContent.trim(),
            });
        });

        setHeadings(headingList);
        return doc.body.innerHTML;
    };

    // Fetch post and preprocess content
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const docRef = doc(db, "posts", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const rawPost = docSnap.data();
                    const processedContent = injectHeadingIds(rawPost.content);
                    setPost({ ...rawPost, content: processedContent });
                } else {
                    setPost(null);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <div className="post-detail-container">Loading...</div>;
    if (!post)
        return <div className="post-detail-container">Post not found.</div>;

    return (
        <div className="post-detail-container">
            <div className="post-main">
                <img src={post.image} alt={post.title} className="post-image" />

                <div className="post-tags">
                    {post.tags?.split(",").map((tag, index) => (
                        <span key={index}>{tag.trim()}</span>
                    ))}
                </div>

                <h1>{post.title}</h1>
                <div className="dots">...</div>

                <div
                    ref={contentRef}
                    className="content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="post-ending">
                    <p className="dots">...</p>
                    <p>Thanks for reading!!!</p>
                    <p>
                        <strong>Huynh Hai Duy</strong>
                    </p>
                    <p>Author</p>
                </div>
            </div>

            <div className="post-sidebar">
                <h3>Contents</h3>
                {headings.map((heading) => (
                    <div
                        key={heading.id}
                        onClick={() => {
                            const target = document.getElementById(heading.id);
                            if (target) {
                                target.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            } else {
                                console.warn("Heading not found:", heading.id);
                            }
                        }}
                    >
                        {heading.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostDetail;
