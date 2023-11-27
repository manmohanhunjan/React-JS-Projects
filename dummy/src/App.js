import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  // variant 1
  // useEffect(() => {
  //   console.log('UI Rendered');
  // });

  // variant 2 -> First render
  // useEffect(() => {
  //   console.log('UI Rendered');
  // }, []);

  // variant 3 -> First render + whenever dependency changes
  useEffect(() => {
    console.log("Change observed");
  }, [text]);

  function changeHandler(event) {
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
