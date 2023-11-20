import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

function PuppyList({setMode, setSelectedPuppy}){
//useState
const [puppyList, setPuppyList] = useState([]);

useEffect(() => {
    const getPuppyList = async() => {
        const response = await fetch `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`;
        const responseJson = await response.json();
        const listOfPuppyPlayers = responseJson.data.players;
        setPuppyList(listOfPuppyPlayers);

    }
    getPuppyList();
}, []);

const handleListItemClick = (clickedPuppy) => { 
  setSelectedPuppy(clickedPuppy); // Set the selected puppy, not the entire list
  setMode('singlePuppy');
};


    return(
        <>
        <h3>Player Roster</h3>
        {
            puppyList.map((singlePuppy, index) => {
                return (
                    <Card key={index} onClick={()=>handleListItemClick(singlePuppy)} style={{ width: '18rem' }}>{singlePuppy.name}</Card>

                )
                
               
            })
        }
        </>
    )
}

export default PuppyList;