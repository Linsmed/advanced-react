import { useState } from 'react';
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>you clicked {count} times</h3>
      <button className="btn" onClick={handleClick} type="button">
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
