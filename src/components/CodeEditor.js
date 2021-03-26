import Editor from "@monaco-editor/react";
import React from 'react';
import './style.css'
export default function CodeEditor({code}) {
  const [isEditorReady, setIsEditorReady] = React.useState(false);
  const valueGetter = React.useRef();

  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  function handleShowValue() {
    alert(valueGetter.current());
  }

  return (
    <div  style={{marginLeft:'8rem', marginTop:'3rem'}}>
      
      <Editor
        type='object'
        height="50vh"
        
        
        language="javascript"
        value={code}
        editorDidMount={handleEditorDidMount}
        horizontal= 'disable'
      />
    </div>
  );
}