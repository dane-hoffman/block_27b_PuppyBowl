import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

function PuppyList(){
//useState
const [puppies, setPuppies] = useState([]);

useEffect(() => {
    const getPuppyList = async() => {
        const response = await fetch `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`;
        const responseJson = await response.json();
        const listOfPuppyPlayers = responseJson.data.players;
        console.log(listOfPuppyPlayers);
        setPuppies(listOfPuppyPlayers);

    }
    getPuppyList();
}, []);


    return(
        <>
        <h2>Puppy Bowl</h2>
        <h3>Player Roster</h3>
        {
            puppies.map((singlePuppy, index) => {
                return (
                    <Card key={index} style={{ width: '18rem' }}>{singlePuppy.name}</Card>

                )
                
               
            })
        }
        </>
    )
}

export default PuppyList;