export default function SearchBar({ setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
