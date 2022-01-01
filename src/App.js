import { useEffect } from "react";
import { useCount } from "./store/counterState";
import { useUser } from "./store/userState";

function App() {
  const { count, increaseCount, decreaseCount, increaseCountBy } = useCount();
  const { user, fetch } = useUser();

  useEffect(() => {
    fetch("https://randomuser.me/api/");
  }, [fetch]);

  return (
    <div>
      {user && (
        <>
          <img src={user.picture.large} alt={user.login.uuid} />
          <p>Name: {user.name.first}</p>
          <p>Email: {user.email}</p>
          <p>User ID: {user.login.uuid}</p>
        </>
      )}
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increse</button>
      <button onClick={decreaseCount}>Decrese</button>
      <button onClick={() => increaseCountBy(2)}>IncreaseBy 2</button>
      <button onClick={() => fetch("https://randomuser.me/api/")}>
        Fetch random user
      </button>
    </div>
  );
}

export default App;
