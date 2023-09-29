import './App.css';
import RotatingBanner from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <main>
      <RotatingBanner items={items} />
    </main>
  );
}

export default App;
