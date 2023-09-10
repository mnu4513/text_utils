import { useState } from "react";
import Form from "react-bootstrap/Form";

function TextForm({ heading }) {
    const [text, setText] = useState("");
    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "white",
        styleName: "light",
    });

    const convertUppercase = (e) => {
        setText(text.toUpperCase());
    };

    const convertLowercase = (e) => {
        setText(text.toLowerCase());
    };

    const clearText = (e) => {
        setText("");
    };

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const copyText = (e) => {
        const text = document.getElementById("exampleForm.ControlTextarea1");
        text.select();
        navigator.clipboard?.writeText(text.value);
    };

    const removeExtraSpaces = () => {
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
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
                    className="btn btn-primary mx-3"
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
