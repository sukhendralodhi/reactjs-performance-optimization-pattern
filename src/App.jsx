import { useCallback, useState } from "react";
import { ChildComponent } from "./components/ChildComponent";
import UsersSortingDemo from "./components/UsersSortingDemo";


function App() {
  // const [value, setValue] = useState("");
  // const [count, setCount] = useState(0);
  // console.log(value);

  // const handleClickFunction = useCallback(() => {
  //   console.log("Hello From useCallback!");
  // }, []);

  // function handleClick() {
  //   console.log("Function Called!");
  // }

  console.log("Parent component rendred");

  return (

    <>
      {/* <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter the nay text" />
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <ChildComponent onClick={handleClickFunction} />
      </div> */}
      <UsersSortingDemo />
    </>
  )
}

export default App
