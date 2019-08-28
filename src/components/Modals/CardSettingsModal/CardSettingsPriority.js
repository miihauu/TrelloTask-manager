import React from 'react';

const CardSettingsPriority = ({
  setPriorityToLow,
  setPriorityToMedium,
  setPriorityToHigh,
  cardPriority,
}) => {
  return (
    <div className="card-settings-priority">
      <div className="card-settings-priority__header">
        Card Priority
      </div>
      <div className="card-settings-priority__buttons">
        <div>
          <button
            type="submit"
            className={
              cardPriority === 'low'
                ? 'priority-button priority-button__low priority-button__low--active'
                : 'priority-button priority-button__low'
            }
            value="low"
            onClick={setPriorityToLow}
          >
            Low
          </button>
        </div>
        <div>
          <button
            type="submit"
            className={
              cardPriority === 'medium'
                ? 'priority-button priority-button__medium priority-button__medium--active'
                : 'priority-button priority-button__medium'
            }
            value="medium"
            onClick={setPriorityToMedium}
          >
            Medium
          </button>
        </div>
        <div>
          <button
            type="submit"
            className={
              cardPriority === 'high'
                ? 'priority-button priority-button__high priority-button__high--active'
                : 'priority-button priority-button__high'
            }
            value="high"
            onClick={setPriorityToHigh}
          >
            High
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSettingsPriority;
