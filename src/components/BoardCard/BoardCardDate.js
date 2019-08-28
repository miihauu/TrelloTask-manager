import React from 'react';

const BoardCardDate = ({ cardPriority, dueDate }) => {
  const styleCardDate = () => {
    if (cardPriority === 'low') {
      return 'card__date card__date-low';
    } else if (cardPriority === 'medium') {
      return 'card__date card__date-mid';
    } else {
      return 'card__date card__date-high';
    }
  };

  return (
    <>
      {dueDate ? (
        <div className={styleCardDate()}>{dueDate}</div>
      ) : null}
    </>
  );
};

export default BoardCardDate;
