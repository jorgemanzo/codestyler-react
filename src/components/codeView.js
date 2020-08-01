import React, { useState } from 'react';

const CodeView = (props) => {
    let [code, setCode] = useState('')
    let [lines, setLines] = useState([{lineNum : 1}, {lineNum : 2}, {lineNum : 3}])

    const onCodeChange = (event) => {
        setCode(event.target.value)
        console.log(event.target.value)
        let num = code.split(/\n/).length
        console.log("Line count: ", num)
        let tempLines = []
        for(let j = 0; j < num; j++) {
            tempLines.push({lineNum : j+1})
        }
        if(num === 0) {
            tempLines.push({lineNum : 1})
        }
        setLines(tempLines)
    }
    return (
        <div className="code">
            <div className="codeArea" >
                <span className="line-number">
                    {
                        lines.map((line, index) => <span key={index}> {line.lineNum} </span>)
                    }
                </span>
                <textarea value={code} onChange={onCodeChange} className="noStyleTextArea"/>
                <span className="cl"></span>
            </div>
            <button className="codeButton" >Copy</button>
        </div>
    )
}

export default CodeView