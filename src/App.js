import React from 'react';
import logo from './logo.svg';
import './App.css';
import CodeView from './components/codeView'


const App = () => {
  return (
    <div className="App">
      <div>
        <h4>Code Sample</h4>
        <p><a href="#" >Copy</a> code to clipboard as Link</p>
        <CodeView/>
      </div>
      <div>
        <h4>Code Sample with copy code button inside pre tag</h4>
        <div className="code">
          <pre>
            <span id='code2'>
              {`
                void Start()
                {
                    Console.WriteLine("I will start");
                }
              `}
            </span>
          </pre>
          <button className="codeButton">Copy</button>
        </div>
      </div>
      <div>
        <h4>This code inside is editable!</h4>
        <div className="code"> 
          <pre >
            <span id='code3'>
              {`
                void Editable()
                {
                    Console.WriteLine("Edit me");
                }
              `}
            </span>
          </pre>
          <button className='codeButton'>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
