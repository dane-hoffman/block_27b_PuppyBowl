import React, { useState } from 'react';
import PuppyList from './PuppyList.jsx';
import SinglePuppy from './SinglePuppy.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mode, setMode] = useState('puppylist');
  const [selectedPuppy, setSelectedPuppy] = useState(null);


  return (
    <>
      <h1>Puppy Bowl</h1>
      {mode === 'puppylist' ? (
        <PuppyList setMode={setMode} setSelectedPuppy={setSelectedPuppy} />
      ) : (
        <SinglePuppy selectedPuppy={selectedPuppy} />
      )}
    </>
  );
}

export default App;

