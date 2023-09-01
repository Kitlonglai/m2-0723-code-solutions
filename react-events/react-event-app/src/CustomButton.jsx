export default function CustomButton({ text, color, onCustomClick }) {
  function handleClick() {
    onCustomClick(text);
  }
  const CustomButtonStyle = {
    backgroundColor: color,
  };
  return (
    <button style={CustomButtonStyle} onClick={handleClick}>
      {text}
    </button>
  );
}
