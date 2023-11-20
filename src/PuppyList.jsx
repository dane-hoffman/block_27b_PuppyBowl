import React from 'react'

function PuppyList(){

    //FETCH 'response' 'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players'
// useEffect(() => {
    const getPuppyList = async() => {
        const response = await fetch `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`;
        //FETCH 'responseJson'
        const responseJson = await response.json();
        const listOfPuppyPlayers = responseJson.data.players;
        console.log(listOfPuppyPlayers);

    // var = responseJson.results
    // setState(var)

    }
    getPuppyList();


    return(
        <>
        <h2>Hi there.</h2>
        </>
    )
}

export default PuppyList;