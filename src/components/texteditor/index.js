import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useColor from '../../utils/useColor';

export default function TextEditor() {
    const [body, setbody] = useState("");
    function handleBody(e) {
        setbody(e);
    }
    const { pick } = useColor();

    return (
        <>
            <ReactQuill theme={"snow"}
                style={{
                    backgroundColor: pick(
                        "rgba(209, 218, 228, 0.8)",
                        "rgba(21, 38, 49, 0.8)"),
                    backdropFilter: "auto",
                    backdropBlur: "2px"
                }}
                placeholder="write something amazing..."
                modules={TextEditor.modules}
                formats={TextEditor.formats}
                onChange={handleBody}
            />
            <div className='ql-snow'>
                <div className='ql-editor' dangerouslySetInnerHTML={{ __html: body }} />
            </div>
        </>

    );
}

TextEditor.modules = {
    toolbar: [
        [{ header: [] }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ 'color': [] }, { 'background': [] }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
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
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "code-block",
    "undo",
    "redo"
];
