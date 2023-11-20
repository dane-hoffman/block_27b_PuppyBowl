import React from 'react';
import Card from 'react-bootstrap/Card';

function SinglePuppy({ selectedPuppy }) {
  return (
    <>
      <h3>Puppy Player</h3>
      {selectedPuppy && (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{selectedPuppy.name}</Card.Title>
            {/* Display other details of the selected puppy */}
            {/* Example: <Card.Text>{selectedPuppy.age}</Card.Text> */}
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default SinglePuppy;
