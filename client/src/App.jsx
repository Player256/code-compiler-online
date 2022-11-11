import { useState } from 'react';

import Navbar from './Navbar';
import Editor from './Editor';

function App() {
  const [language,setLanguage] = useState('python');

  return (
    <div className="flex flex-col justify-center">
      <Navbar setLanguage = {setLanguage}/>
       <Editor language = {language}/>
 
    </div>
  );
}

export default App; 
