export default function CustomButton({ text, color }) {
  const customButtonStyle = {
    backgroundColor: color,
  };

  return <button style={customButtonStyle}>{text}</button>;
}
