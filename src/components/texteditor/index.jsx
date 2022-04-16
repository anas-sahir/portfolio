import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useColor from '../../utils/useColor';

export default function TextEditor() {
    const [body, setbody] = useState("");
    const { pick } = useColor();

    function handleBody(e) {
        setbody(e);
    }

    return (
        <Flex >
            <ReactQuill theme='snow'
                placeholder="write something amazing..."
                
                style={{
                    background: pick(
                        "rgba(209, 218, 228, 0.8)",
                        "rgba(21, 38, 49, 0.8)"),
                    backdropFilter: "auto",
                    backdropBlur: "2px",
                    height: "200px",
                    paddingBottom:"43px",
                    // minHeight: window.innerHeight * 0.4,
                    // maxHeight: window.innerHeight * 0.8,
                    // maxWidth: window.innerWidth * 0.8,
                }}
                modules={TextEditor.modules}
                formats={TextEditor.formats}
                onChange={handleBody}
            />
        </Flex>
    );
    {/* <div className='ql-snow'>
            <div className='ql-editor' dangerouslySetInnerHTML={{ __html: body }} />
        </div> */}
}

TextEditor.modules = {
    toolbar: [
        [{ header: [1, 2, 3] }],
        [{ font: [] }],
        [{ size: [] }],
        [{ 'align': [] }, { 'direction': 'rtl' }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ list: "ordered" }, { list: "bullet" }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'color': [] }, { 'background': [] }],
        ["link", "image", "video"],
        ["code-block"],
        ["clean"],
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
