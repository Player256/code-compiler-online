import { useState } from 'react';

import Navbar from './Navbar';
import Editor from './Editor';

function App() {
  

  return (
    <div className="flex flex-col justify-center">
      <Navbar/>
       <Editor/>
 
    </div>
  );
}

export default App;
