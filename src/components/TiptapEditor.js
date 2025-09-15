import React, { useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import "./TiptapEditor.css"; // optional for styling
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import HardBreak from "@tiptap/extension-hard-break";

const TiptapEditor = ({ content, onChange }) => {
    const fileInputRef = useRef(null);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Table.configure({ resizable: true }),
            TableRow,
            TableCell,
            TableHeader,
            CodeBlock,
            Blockquote,
            HorizontalRule,
            HardBreak,
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                editor.chain().focus().setImage({ src: reader.result }).run();
            };
            reader.readAsDataURL(file);
        }
    };

    if (!editor) return null;

    return (
        <div className="tiptap-wrapper">
            <div className="tiptap-toolbar">
                {/* Text Styles */}
                <button
                    className={editor.isActive("bold") ? "active" : ""}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                >
                    Bold
                </button>
                <button
                    className={editor.isActive("italic") ? "active" : ""}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                >
                    Italic
                </button>
                <button
                    className={editor.isActive("strike") ? "active" : ""}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                >
                    Strike
                </button>
                <button
                    className={editor.isActive("code") ? "active" : ""}
                    onClick={() => editor.chain().focus().toggleCode().run()}
                >
                    Code
                </button>

                {/* Clear Formatting */}
                <button
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                >
                    Clear Marks
                </button>
                <button
                    onClick={() => editor.chain().focus().clearNodes().run()}
                >
                    Clear Nodes
                </button>

                {/* Paragraph & Headings */}
                <button
                    className={editor.isActive("paragraph") ? "active" : ""}
                    onClick={() => editor.chain().focus().setParagraph().run()}
                >
                    Paragraph
                </button>
                <button
                    className={
                        editor.isActive("heading", { level: 1 }) ? "active" : ""
                    }
                    onClick={() =>
                        editor.chain().focus().setHeading({ level: 1 }).run()
                    }
                >
                    H1
                </button>
                <button
                    className={
                        editor.isActive("heading", { level: 2 }) ? "active" : ""
                    }
                    onClick={() =>
                        editor.chain().focus().setHeading({ level: 2 }).run()
                    }
                >
                    H2
                </button>
                <button
                    className={
                        editor.isActive("heading", { level: 3 }) ? "active" : ""
                    }
                    onClick={() =>
                        editor.chain().focus().setHeading({ level: 3 }).run()
                    }
                >
                    H3
                </button>
                <button
                    className={
                        editor.isActive("heading", { level: 4 }) ? "active" : ""
                    }
                    onClick={() =>
                        editor.chain().focus().setHeading({ level: 4 }).run()
                    }
                >
                    H4
                </button>
                <button
                    className={
                        editor.isActive("heading", { level: 5 }) ? "active" : ""
                    }
                    onClick={() =>
                        editor.chain().focus().setHeading({ level: 5 }).run()
                    }
                >
                    H5
                </button>
                <button
                    className={
                        editor.isActive("heading", { level: 6 }) ? "active" : ""
                    }
                    onClick={() =>
                        editor.chain().focus().setHeading({ level: 6 }).run()
                    }
                >
                    H6
                </button>

                {/* Lists */}
                <button
                    className={editor.isActive("bulletList") ? "active" : ""}
                    onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                    }
                >
                    Bullet List
                </button>
                <button
                    className={editor.isActive("orderedList") ? "active" : ""}
                    onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                    }
                >
                    Ordered List
                </button>

                {/* Blocks */}
                <button
                    className={editor.isActive("codeBlock") ? "active" : ""}
                    onClick={() =>
                        editor.chain().focus().toggleCodeBlock().run()
                    }
                >
                    Code Block
                </button>
                <button
                    className={editor.isActive("blockquote") ? "active" : ""}
                    onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                    }
                >
                    Blockquote
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().setHorizontalRule().run()
                    }
                >
                    Horizontal Rule
                </button>
                <button
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                >
                    Hard Break
                </button>

                {/* Undo/Redo */}
                <button onClick={() => editor.chain().focus().undo().run()}>
                    Undo
                </button>
                <button onClick={() => editor.chain().focus().redo().run()}>
                    Redo
                </button>

                {/* Insert Image */}
                <button onClick={() => fileInputRef.current.click()}>
                    Insert Image
                </button>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                />

                {/* Insert Table */}
                <button
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .insertTable({
                                rows: 3,
                                cols: 3,
                                withHeaderRow: true,
                            })
                            .run()
                    }
                >
                    Insert Table
                </button>
            </div>

            <EditorContent editor={editor} />
        </div>
    );
};

export default TiptapEditor;
