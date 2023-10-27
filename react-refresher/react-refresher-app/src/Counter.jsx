import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={decrement}>Down</button>
      <h1>{count}</h1>
      <button onClick={increment}>Up</button>
    </div>
  );
}
