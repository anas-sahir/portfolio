import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import "../../../node_modules/react-quill/dist/quill.snow.css";
// import { EditorState, ContentState } from 'draft-js';
// import htmlToDraft from 'html-to-draftjs';
// const { convert } = require('html-to-text');
// import { convert } from 'html-to-text';


export default function TextEditor() {
    const [body, setbody] = useState("");
    function handleBody(e) {
        setbody(e);
    }

    return (
        <>
            <ReactQuill
                placeholder="write something amazing..."
                modules={TextEditor.modules}
                formats={TextEditor.formats}
                onChange={handleBody}
            />
        </>

    );
}

TextEditor.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ 'color': [] }, { 'background': [] }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],
    ],
};

TextEditor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block",
];
