import React from 'react';

const BoardCardPriority = ({ cardPriority }) => {
  const handlePriority = () => {
    if (cardPriority === 'low') {
      return 'Low Priority';
    } else if (cardPriority === 'medium') {
      return 'Medium Priority';
    } else {
      return 'High Priority';
    }
  };

  const priorityStyle = () => {
    if (cardPriority === 'low') {
      return 'card-priority card-priority__low';
    } else if (cardPriority === 'medium') {
      return 'card-priority card-priority__medium';
    } else {
      return 'card-priority card-priority__high';
    }
  };

  return <div className={priorityStyle()}>{handlePriority()}</div>;
};

export default BoardCardPriority;
