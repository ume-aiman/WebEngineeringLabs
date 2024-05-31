import { useState } from "react";
import "./users.css";
import { faker } from "@faker-js/faker";
const friendCategory = {
  acha: "Acha",
  bura: "Bura",
};
const Friends = () => {
  const [category, setCategory] = useState(friendCategory.acha);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  return (
    <>
      <h1> users</h1>
      {JSON.stringify({ name, category })}
      <br />
      <input
        onChange={(e) => {
          // console.log(e.target.value);
          setName(e.target.value);
        }}
        placeholder="friend name"
        value={name}
      />
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value={friendCategory.acha}> {friendCategory.acha}</option>
        <option value={friendCategory.bura}> {friendCategory.bura}</option>
      </select>
      <button
        onClick={() => {
          // setUsers([faker.animal.bear()]);
          // good
          setUsers((prev) => [...prev, { name, category }]);
          // setUsers((prev) => [...prev, name]);
          setName("");
          // bad
          // setUsers([...users, faker.animal.bear()]);
        }}
      >
        Add
      </button>
      <br />
      Achay Dost:
      <ul>
        {users
          ?.filter((item) => item.category === friendCategory.acha)
          ?.map((user) => (
            <li>
              {user.name} ({user.category})
            </li>
          ))}
      </ul>
      <hr />
      Buray Dost:
      <ul>
        {users
          ?.filter((item) => item.category === friendCategory.bura)
          ?.map((user) => (
            <li>
              {user.name} ({user.category})
            </li>
          ))}
      </ul>
    </>
  );
};
export default Friends;