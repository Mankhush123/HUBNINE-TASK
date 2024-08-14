// src/components/Canvas.js
import React, { useState } from 'react';
import Card from './Card';
import { ArcherContainer, ArcherElement } from 'react-archer';
import './Canvas.css';

const Canvas = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      text: 'This is some dummy text for the card. Show more to view details.',
      x: 100,
      y: 100,
      width: 200,
      height: 100,
    };
    setCards([...cards, newCard]);
  };

  return (
    <ArcherContainer strokeColor="black">
      <div className="canvas">
        <button onClick={addCard}>Add Card</button>
        {cards.map((card) => (
          <ArcherElement
            key={card.id}
            id={`card-${card.id}`}
            relations={
              cards.length > 1 // Ensure there's more than one card before setting relations
                ? [
                    {
                      targetId: `card-${cards[0].id}`, // Set targetId dynamically based on another card
                      targetAnchor: 'top',
                      sourceAnchor: 'bottom',
                      style: { strokeColor: 'red', strokeWidth: 2 },
                    },
                  ]
                : []
            }
          >
            <Card key={card.id} card={card} />
          </ArcherElement>
        ))}
      </div>
    </ArcherContainer>
  );
};

export default Canvas;
