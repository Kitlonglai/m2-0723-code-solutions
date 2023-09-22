export default function SearchBar({ setSearch }) {
  return (
    <div>
      <input
        class="input-field"
        type="text"
        placeholder="search"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
