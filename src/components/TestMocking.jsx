import React, { useState } from "react";

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

export default function TestMocking() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const url =
    "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json";

  const handleClick = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((error) => {
        setError(`something wrong : ${error}`);
      });
  };

  const handleClick2 = () => {
    fetch("/login")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => {
        setError(`something wrong : ${error}`);
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <button onClick={handleClick2}>click2</button>
      {data && (
        <ul>
          {data.people.map((person) => (
            <Item
              key={`${person.name}-${person.age}`}
              name={person.name}
              age={person.age}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
