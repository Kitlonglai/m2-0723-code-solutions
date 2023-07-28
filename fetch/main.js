fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error: Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error: Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
