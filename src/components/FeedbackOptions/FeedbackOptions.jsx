import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul>
        {options.map(a => {
          return (
            <li key={nanoid()}>
              <button name={a} onClick={onLeaveFeedback}>
                {a}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
