import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const CodeView = (props) => {
    let [code, setCode] = useState('')
    let [lines, setLines] = useState([1])

    const onCodeChange = (event) => {
        setCode(event.target.value)
        let num = event.target.value.split(/\n/).length
        if(num === 0) {
            setLines([1])
        } else {
            let temp = []
            for(let i = 0; i < num; i++) {
                temp.push(i+1)
            }
            setLines(temp)
        }
    }
    return (
        <div className="code">
            <div className="codeArea" >
                <span className="line-number">
                    {
                        lines.map((line) => <span className="minispan" key={line}> {line} </span>)
                    }
                </span>
                <TextareaAutosize spellCheck="false" value={code} onChange={onCodeChange} className="noStyleTextArea"/>
                <span className="cl"></span>
            </div>
            <CopyToClipboard text={code}>
                <button className="codeButton" >Copy</button>
            </CopyToClipboard>
        </div>
    )
}

export default CodeView