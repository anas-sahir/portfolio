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
        // const blocksFromHtml = htmlToDraft(body);
        // console.log("blocksFromHtml: " + blocksFromHtml);
        // const { contentBlocks, entityMap } = blocksFromHtml;
        // const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        // const editorState = EditorState.createWithContent(contentState);
        // getText(e);
    }

    // function getText(html) {
    //     const text = convert(html, {
    //         wordwrap: 130
    //     });
    //     // console.log(text);
    // }

    return (
        <>
            <ReactQuill
                placeholder="write something amazing..."
                modules={TextEditor.modules}
                formats={TextEditor.formats}
                onChange={handleBody}
                value={body}
            />

            {body}
            {" "}
            < div dangerouslySetInnerHTML={{ __html: body }} />
            {/* <div dangerouslySetInnerHTML={{ __html: "<h1 style='font-size:50px'><strong>hy there</strong></h1><h2><em>first things first</em></h2><p>ana db gaaaa kanjereb fel editor wach i9der ikhdem liya html west JSX.</p><p>hado homa lmachakil li l9ithom db :</p><ul><li>header makhdamch</li><li>size makhdamch</li><li>bold et italic makhdaminch</li><li>o 7ta had la3ba li 3la <s>hadi</s> makhdamach</li></ul><p><strong class='ql- font - monospace ql-size-large'>idan chno khasna ndiro ????</strong></p><p>ana gelt nkteb blog li howa hada nit o njereb zahri hhhhhhhh</p>" }} /> */}
            {/* < div dangerouslySetInnerHTML={{ __html: "<h1 style='font-size:20px'><span style = 'color:hotpink'>keep me and make me pretty!</span></h1 > " } */}
            {/* {ReactHtmlParser(body)} */}
            {/* {ReactHtmlParser("<h1 style='font-size:20px'><span style = 'color:hotpink'>keep me and make me pretty!</span></h1 > ")} */}
            {/* {body} */}
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
