import React, { useEffect, useState } from 'react'


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
        <h2>Hi there.</h2>
        {
            puppies.map((singlePuppy) => {
                return <li>{singlePuppy.name}</li>
            })
        }
        </>
    )
}

export default PuppyList;