import { useState } from 'react';
import './App.css';
import MovieWithHoc from './hoc-patterns/MovieWithHoc';


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

  const [isOpen, setIsOpen] = useState(false);

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
      {/* <Header />
      <main>
        <Routes>
          <Route path="/" element={<UserProfileContainer userId={1} />} />
          <Route path="/products" element={<ProductListContainer />} />
          <Route path="/cart" element={<MyCartContainer />} />
        </Routes>
      </main> */}

      {/* <Counter /> */}
      {/* <AutoFocusInput /> */}
      {/* <CounterWithRef /> */}
      {/* <FeedbackForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <NonLazyLoading /> */}
      {/* <LazyLoading /> */}
      {/* <RowContainer /> */}
      {/* <ProductContainer /> */}
      {/* <Modal
        title="Delete account"
        body="Are you sure you want to delete your account"
        primaryAction={<button>Delete</button>}
        secondaryAction={<button>Cancel</button>}
      /> */}

      {/* <div className='flex flex-col justify-center items-center'>

        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>

          <Modal.Header>
            <h1>Welcome</h1>
          </Modal.Header>

          <Modal.Body>
            <p>
              This modal build with the Compound Component Pattern.
            </p>
          </Modal.Body>

          <AccordionDemo />

          <Modal.Footer>
            <button onClick={() => setIsOpen(false)}>Close</button>
            <button onClick={() => alert("Action performed!")}>Do Action</button>
            <button>Help!</button>
          </Modal.Footer>

        </Modal>
      </div> */}

      {/* <Accordian>
        <Accordian.Item title="What is component compound pattern?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus voluptatem vitae, ut optio cumque asperiores dolore dolor commodi quia?
        </Accordian.Item>
        <Accordian.Item title="why use it?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus voluptatem vitae, ut optio cumque asperiores dolore dolor commodi quia?
        </Accordian.Item>
        <Accordian.Item title="Pitfalls?">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus voluptatem vitae, ut optio cumque asperiores dolore dolor commodi quia?
        </Accordian.Item>
      </Accordian> */}

      {/* <div className='flex justify-center items-center min-h-screen'>
        <ProductCard />
      </div> */}
      {/* <Profile /> */}
      {/* <CarTracker /> */}
      {/* <BikeTracker /> */}
      {/* <MouseTracker
        render={(position) => (<p>🚗 Car is at- (X: {position.x} Y:{position.y})</p>)}
      />
      <MouseTracker
        render={(position) => (<p>🚴 Bike is at- (X: {position.x} Y:{position.y})</p>)}
      /> */}

      <MovieWithHoc />
    </>
  )
}

export default App
