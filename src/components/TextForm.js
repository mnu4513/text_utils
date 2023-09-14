import { useState } from "react";
import Form from "react-bootstrap/Form";

function TextForm({ heading, handleAlert }) {
    const [text, setText] = useState("");


    const convertUppercase = (e) => {
        setText(text.toUpperCase());
        handleAlert({
            variant: "primary",
            message: "Converted to upper case"
        });
    };

    const convertLowercase = (e) => {
        setText(text.toLowerCase());
        handleAlert({
            variant: "primary",
            message: "Converted to lower case"
        });
    };

    const clearText = (e) => {
        setText("");
        handleAlert({
            variant: "danger",
            message: "Text cleared"
        });
    };

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const copyText = (e) => {
        const text = document.getElementById("exampleForm.ControlTextarea1");
        text.select();
        navigator.clipboard?.writeText(text.value);
        handleAlert({
            variant: "success",
            message: "Text copied to clipboard"
        });
    };

    const removeExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        handleAlert({
            variant: "warning",
            message: "Extra spaces removed"
        });
    };

    return (
        <>
            <div className="container my-3">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>{heading}</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={8}
                            placeholder="Enter text here..."
                            value={text}
                            onChange={(e) => handleOnChange(e)}
                        />
                    </Form.Group>
                </Form>

                <button
                    className="btn btn-primary mx-3"
                    onClick={(e) => convertUppercase(e)}
                >
                    Convert to Uppercase
                </button>

                <button
                    className="btn btn-primary my-3"
                    onClick={(e) => convertLowercase(e)}
                >
                    Convert to Lowercase
                </button>

                <button
                    className="btn btn-primary mx-3"
                    onClick={(e) => copyText(e)}
                >
                    Copy to clipboard
                </button>

                <button
                    className="btn btn-primary mx-3 my-3"
                    onClick={(e) => removeExtraSpaces(e)}
                >
                    Remove extra spaces
                </button>

                <button className="btn btn-danger mx-3" onClick={(e) => clearText(e)}>
                    Clear the text
                </button>
            </div>

            <div className="container">
                <h3> Your test summary</h3>

                <p>
                    This text has {text.split(" ").length} words and {text.length}{" "}
                    characters.{" "}
                </p>

                <p>
                    An average person will take almost{" "}
                    {Math.ceil(text.split(" ").length * (1 / 5))} seconds to read it.
                </p>

                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    );
}

export default TextForm;
