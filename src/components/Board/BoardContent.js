import React from 'react';
import BoardCard from '../BoardCard/BoardCard';

const BoardContent = ({ cards, boardId, innerRef, children }) => {
  return (
    <div className="board__content" ref={innerRef}>
      {cards.map((card, index) => {
        return (
          <BoardCard
            cardId={card}
            boardId={boardId}
            key={card}
            index={index}
            innerRef={innerRef}
          />
        );
      })}
      {children}
    </div>
  );
};

export default BoardContent;
