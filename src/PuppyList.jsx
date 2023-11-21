import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function PuppyList({ setMode, setSelectedPuppy }) {
  const [puppyList, setPuppyList] = useState([]);

  useEffect(() => {
    const getPuppyList = async () => {
      try {
        const response = await fetch(
          'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players'
        );
        const responseJson = await response.json();
        const listOfPuppyPlayers = responseJson.data.players;
        setPuppyList(listOfPuppyPlayers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getPuppyList();
  }, []);

  const handleListItemClick = (clickedPuppy) => {
    setSelectedPuppy(clickedPuppy);
    setMode('singlePuppy');
  };

  return (
    <>
      <h3>Player Roster</h3>
      {puppyList.map((singlePuppy, index) => (
        <Card
          key={index}
          onClick={() => handleListItemClick(singlePuppy)}
          style={{ width: '18rem', cursor: 'pointer' }}
        >
          {singlePuppy.name}
        </Card>
      ))}
    </>
  );
}

export default PuppyList;
