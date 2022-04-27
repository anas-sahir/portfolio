import { Flex, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useColor from "../../utils/useColor";
import { BiSend, BiCheck, BiError } from "react-icons/bi";
import emailjs from "emailjs-com";

export default function TextEditor() {
    const [body, setbody] = useState("");
    const { pick } = useColor();
    const [error, setError] = useState(false);
    const [sending, setSending] = useState(false);
    const [sended, setSended] = useState(false);

    function handleBody(e) {
        setbody(e);
    }

    return (
        <Flex flexDirection="column"
            align={"center"}
        >
            <Button
                mb={5}
                mt={-20}
                leftIcon={(sended) ? <BiCheck /> : (error) ? <BiError /> : <BiSend />}
                onClick={() => {
                    setSending(true);
                    emailjs
                        .send(
                            "service_eheadna",
                            "template_jzdwyg8",
                            { "body": body },
                            "E6JFNNf4VCuEbyXku")
                        .then(
                            (result) => {
                                setSending(false);
                                setSended(true);
                            },
                            (error) => {
                                setSending(false);
                                setError(true);
                            });
                }}
                isLoading={sending}
                loadingText="envoi en cours"
                color={(sended) ? "green" : (error) ? "red" : null}
                borderColor={(sended) ? "green" : (error) ? "red" : null}
                variant='outline'
                borderWidth={2}
            >
                {(sended)
                    ? "Envoyé"
                    : (error)
                        ? "Une erreur s'est produite, veuillez réessayer ultérieurement"
                        : "Envoyer"}
            </Button>
            <div className="ql-editor" style={{
                // overflowY: "hidden",
                minHeight: "130px",
                maxHeight: window.innerHeight - 200,
                // backgroundColor:"red"
            }}>
                
                <ReactQuill theme='snow'
                    placeholder="WRITE HERE"
                    style={{
                        background: pick(
                            "rgba(209, 218, 228, 0.96)",
                            "rgba(209, 218, 228, 0.96)"),
                        // minHeight: window.innerHeight * 0.4,
                        // maxHeight: window.innerHeight * 0.5,
                        // padding: "50px",
                        // color: "black",
                        maxWidth: window.innerWidth * 0.8,
                    }}
                    modules={TextEditor.modules}
                    formats={TextEditor.formats}
                    onChange={handleBody}
                />
            </div>
            {/* <div className='ql-snow'>
            <div className='ql-editor' dangerouslySetInnerHTML={{ __html: body }} />
        </div> */}
        </Flex>
    );
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
