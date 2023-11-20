import React, {useState} from 'react'
import PuppyList from './PuppyList.jsx'
import SinglePuppy from './SinglePuppy.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  //useState
const [mode, setMode] = useState('puppylist');
const [selectedPuppy, setSelectedPuppy] = useState(null);


  return (
    <>
    <h1>Puppy Bowl</h1>
    <PuppyList setMode={setMode} setSelectedPuppy={setSelectedPuppy} />
    <SinglePuppy setMode={setMode} selectedPuppy={selectedPuppy} />
    
    </>
  )
}

export default App
