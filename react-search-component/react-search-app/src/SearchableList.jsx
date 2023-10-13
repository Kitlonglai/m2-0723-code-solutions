import { useState } from 'react';
import SearchBar from './SearchBar';
import ListItem from './ListItem';

export default function SearchableList({ strings }) {
  const [search, setSearch] = useState('');
  const filtered = strings.filter((string) =>
    string.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <ul>
        {filtered.length > 0 ? (
          filtered.map((string, index) => (
            <ListItem key={index} string={string} />
          ))
        ) : (
          <p>No items match the filter</p>
        )}
      </ul>
    </div>
  );
}
