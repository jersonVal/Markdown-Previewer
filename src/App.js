import './App.css';
import Viewer from './components/Viewer';
import PreViewer from './components/Previewer';
import {useState, useEffect} from 'react';

function App() {
  const [textEditor, setTextEditor] = useState('Hello this a test')

  return (
    <div className="App">
      <Viewer text={textEditor} setText={setTextEditor} />
      <PreViewer text={textEditor} />
    </div>
  );
}

export default App;
