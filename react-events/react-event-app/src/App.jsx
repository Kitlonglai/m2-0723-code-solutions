import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(`Clicked ${text}`);
  }
  return (
    <div>
      <CustomButton text="stop" onCustomClick={handleCustomClick} color="red" />
      <CustomButton text="go" onCustomClick={handleCustomClick} color="green" />
      <CustomButton
        text="slow"
        onCustomClick={handleCustomClick}
        color="blue"
      />
    </div>
  );
}

export default App;
