import React, { useState } from 'react'; // Ensure useState is imported
import { ResizableBox } from 'react-resizable';
import Modal from 'react-modal';
import './Card.css';

const Card = ({ card }) => {
  const [position, setPosition] = useState({ x: card.x, y: card.y });
  const [isOpen, setIsOpen] = useState(false);

  const handleDrag = (e) => {
    const newX = e.clientX - e.target.offsetWidth / 2;
    const newY = e.clientY - e.target.offsetHeight / 2;
    setPosition({ x: newX, y: newY });
  };

  return (
    <>
      <ResizableBox
        width={card.width}
        height={card.height}
        minConstraints={[100, 50]}
        maxConstraints={[400, 300]}
        className="card"
        style={{ top: position.y, left: position.x, position: 'absolute' }}
      >
        <div
          className="card-content"
          draggable
          onDragEnd={handleDrag}
        >
          {card.text.substring(0, 20)}...
          <button onClick={() => setIsOpen(true)}>Show More</button>
        </div>
      </ResizableBox>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Card Details"
      >
        <h2>Card Details</h2>
        <p>{card.text}</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export default Card;
