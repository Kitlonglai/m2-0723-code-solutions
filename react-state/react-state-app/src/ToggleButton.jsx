import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log(`return value of useState: ${isClicked}`);
  function handleClick() {
    console.log(`value before calling setter: ${isClicked}`);
    setIsClicked(!isClicked);
    console.log(`value after calling setter: ${isClicked}`);
  }
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: isClicked ? color : 'white' }}>
      {text}
    </button>
  );
}
