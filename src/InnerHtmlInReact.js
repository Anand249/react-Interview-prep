import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function InnerHtmlInReact() {
    const [quill, setQuill] = useState('');
    const data = `<p style="font-size: 25px; color: green">Inner HTML in React</p>`;
    const getQuillData = (value) => {
        setQuill(value);
    };
    console.log(quill)
    return (
        <div className='centerText'>
            <h1 dangerouslySetInnerHTML={{ __html: data }}></h1>
            <div dangerouslySetInnerHTML={{ __html: quill }}></div>
            <ReactQuill onChange={getQuillData}/>
        </div>
    )
}
