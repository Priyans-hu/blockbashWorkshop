import React, { useState } from "react";
import { blockbashWorkshop_backend } from "../../declarations/blockbashWorkshop_backend/index";
import { Principal } from "@dfinity/principal";

function TextDisplay() {
    const [inputId, setInputId] = useState("");
    const [displayText, setDisplayText] = useState("");

    const handleIdChange = async (e) => {
        setInputId(e.target.value);
    };

    const handleDisplayText = async () => {
        console.log(inputId);

        const message = await blockbashWorkshop_backend.getCertificate(
            Principal.fromText(inputId)
        );
        console.log(message);
        setDisplayText(message);
        console.log(displayText);
    };

    return (
        <div>
            <h1>Get your certificate !! </h1>
            <div>
                <label>
                    Enter your ID :
                    <input type="text" value={inputId} onChange={handleIdChange} />
                </label>
                <button onClick={handleDisplayText}>Get Certificate!</button>
            </div>
            {displayText && (
                <div>
                    <p>Text Displayed: {displayText} </p>
                </div>
            )}
        </div>
    );
}

export default TextDisplay;
