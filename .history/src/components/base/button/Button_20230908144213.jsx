import React from 'react';
import "./button.css";

export default function Button({ title, size, type }) {
    const styleObj = {
        width: size + "px",
    }
    return (
        <>
            <button style={styleObj} className='t-button'>
                {title}
            </button>
        </>
    )
}
