import { useState } from 'react';
import './App.css';
import axios from 'axios';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import CodeMirror from '@uiw/react-codemirror';

const Editor = ({language}) => {
  const [code, setCode] = useState('');
  const [compiled, setCompiled] = useState('');

  const checkCode = async () => {
    await axios
      .post('http://localhost:8000/python', { code })
      .then((response) => {
        console.log(response.data.output);
        setCompiled(response.data.output);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <header className="App-header">
        <div className="absolute top-20 bottom-40 left-20 right-20 text-left">
          <CodeMirror
            value={code}
            options={{
              theme: 'dracula',
              keyMap: 'sublime',
              mode: {language},
            }}
            onChange={(editor, data, value) => {
              setCode(editor.getValue());
            }}
            className="w-96 h-80"
          />

          <div
            onClick={() => checkCode()}
            className="border-2 p-2 bg-green-600"
          >
            Submit Code
          </div>
          <div className="output">{compiled}</div>
        </div>
      </header>
    </div>
  );
};

export default Editor;
