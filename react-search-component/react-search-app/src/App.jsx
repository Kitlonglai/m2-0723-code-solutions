import React from 'react';
import './App.css';
import SearchableList from './SearchableList';

const strings = [
  'Yer a wizard Harry.',
  "I hope you're pleased with yourselves",
  'It does not do well to dwell on dreams and forget to live.',
  'To the well-organized mind, death is but the next great adventure',
  "You're a little scary sometimes, you know that?",
  'There will be no foolish wand-waving or silly incantations in this class.',
  'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.',
  'If there is one thing Voldemore cannot understand, it is love.',
  'As much money and life as you could want!',
  'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.',
  'There are some things you cant share without ending up liking each other.',
  'Ah, music. A magic beyond all we do here!',
];

function App() {
  return (
    <main>
      <SearchableList strings={strings} />
    </main>
  );
}

export default App;
