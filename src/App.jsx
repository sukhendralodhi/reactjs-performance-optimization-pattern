import { Route, Routes } from "react-router-dom";
import Header from "./with-pattern/components/Header/Header";
import MyCartContainer from "./with-pattern/components/product/cart/MyCartContainer";
import ProductListContainer from "./with-pattern/components/product/ProductListContainer";
import UserProfileContainer from "./with-pattern/components/profile/UserProfileContainer";


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

  // console.log("Parent component rendred");

  return (

    <>
      {/* <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter the nay text" />
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <ChildComponent onClick={handleClickFunction} />
      </div> */}
      {/* <UsersSortingDemo /> */}
      {/* <SearchBox /> */}
      {/* <ScrollTracker /> */}
      {/* <h1 className="text-2xl font-bold">Hello, React!</h1> */}
      {/* <UserProfile userId={2} /> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<UserProfileContainer userId={1} />} />
          <Route path="/products" element={<ProductListContainer />} />
          <Route path="/cart" element={<MyCartContainer />} />
        </Routes>
      </main>
    </>
  )
}

export default App
