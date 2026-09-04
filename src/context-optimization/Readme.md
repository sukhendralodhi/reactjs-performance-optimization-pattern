# React Context Optimization

A practical guide to optimizing React Context and reducing unnecessary component re-renders.

## 📌 Overview

React Context is useful for sharing data across multiple components without passing props manually through every level.

However, if Context is not structured properly, it can cause unnecessary re-renders and affect application performance.

This project demonstrates different techniques for optimizing React Context.

## 🚀 The Problem with a Large Context

Consider a single context containing multiple pieces of state:

```tsx
const AppContext = createContext(null);
```

```tsx
function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
```

Now imagine two components:

```tsx
function UserProfile() {
  const { user } = useContext(AppContext);

  return <h1>{user?.name}</h1>;
}
```

```tsx
function ThemeButton() {
  const { theme } = useContext(AppContext);

  return <button>{theme}</button>;
}
```

When the `theme` changes, the Provider receives a new value.

This can cause context consumers to receive an update even if they only need unrelated data such as `user`.

## ❌ Before Optimization

```text
AppContext
├── user
├── theme
├── cart
├── products
└── notifications
```

One large Context manages everything.

If one frequently changing value updates:

```text
Context value changes
        ↓
Context consumers receive an update
        ↓
Potential unnecessary re-renders
```

---

# ✅ Optimization Techniques

## 1. Split Context by Responsibility

Instead of using one large Context, create separate Contexts.

```tsx
const UserContext = createContext(null);
const ThemeContext = createContext(null);
```

### User Provider

```tsx
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

### Theme Provider

```tsx
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Usage

```tsx
<UserProvider>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</UserProvider>
```

Now changes to `theme` are isolated from components that only consume `UserContext`.

---

## 2. Memoize the Provider Value with `useMemo`

Creating an object directly inside a Provider creates a new object on every render.

### ❌ Without `useMemo`

```tsx
const value = {
  user,
  setUser,
};
```

Even if the values are the same, the object reference is new.

```tsx
oldValue !== newValue; // true
```

### ✅ With `useMemo`

```tsx
const value = useMemo(() => {
  return {
    user,
    setUser,
  };
}, [user]);
```

Now the value object remains stable until one of its dependencies changes.

### Complete Example

```tsx
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
```

---

## 3. Memoize Functions with `useCallback`

Functions created inside a component are recreated on every render.

### ❌ Without `useCallback`

```tsx
const addProduct = (product) => {
  setProducts([...products, product]);
};
```

Because `addProduct` gets a new reference on every render, it can also cause the memoized Context value to change.

### ✅ With `useCallback`

```tsx
const addProduct = useCallback((product) => {
  setProducts((previousProducts) => [
    ...previousProducts,
    product,
  ]);
}, []);
```

Using the functional state update allows us to avoid depending on `products`.

### Complete Example

```tsx
function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = useCallback((product) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      product,
    ]);
  }, []);

  const value = useMemo(() => {
    return {
      products,
      addProduct,
    };
  }, [products, addProduct]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}
```

---

## 4. Separate State and Actions Context

For larger applications, you can separate changing state from action functions.

```tsx
const ProductStateContext = createContext(null);
const ProductActionsContext = createContext(null);
```

### Provider

```tsx
function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const addProduct = useCallback((product) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      product,
    ]);
  }, []);

  return (
    <ProductActionsContext.Provider value={{ addProduct }}>
      <ProductStateContext.Provider value={products}>
        {children}
      </ProductStateContext.Provider>
    </ProductActionsContext.Provider>
  );
}
```

### Component That Only Needs Actions

```tsx
function AddProductButton() {
  const { addProduct } = useContext(ProductActionsContext);

  return (
    <button
      onClick={() =>
        addProduct({
          id: 1,
          name: "Phone",
        })
      }
    >
      Add Product
    </button>
  );
}
```

This component does not need to subscribe to the changing `products` state.

### Component That Needs State

```tsx
function ProductList() {
  const products = useContext(ProductStateContext);

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}
```

---

## 5. Avoid Putting Everything in One Context

Avoid this:

```tsx
value={{
  user,
  theme,
  searchText,
  notifications,
  products,
  cart,
}}
```

Especially when some values change frequently.

For example:

```tsx
setSearchText(event.target.value);
```

If `searchText` changes on every keystroke, a large Context can update very frequently.

A better structure is:

```text
App
│
├── AuthContext
│   └── user
│
├── ThemeContext
│   └── theme
│
├── CartContext
│   └── cart
│
├── ProductContext
│   └── products
│
└── SearchContext
    └── searchText
```

Group Context data based on:

* Responsibility
* Which components need the data
* How frequently the data changes

---

## ⚠️ Does `React.memo` Optimize Context?

Not automatically.

```tsx
const UserProfile = React.memo(function UserProfile() {
  const { user } = useContext(UserContext);

  return <h1>{user?.name}</h1>;
});
```

`React.memo` helps prevent unnecessary re-renders caused by unchanged props.

However, if a Context value consumed by the component changes, React can still re-render the component.

For Context optimization, focus on:

1. Splitting Contexts
2. Using `useMemo` for Provider values when appropriate
3. Using `useCallback` for functions when stable references are needed
4. Separating state from actions in larger applications
5. Avoiding large Contexts containing frequently changing data

---

## 📊 Optimization Flow

```text
State Changes
      ↓
Provider Re-renders
      ↓
Check Context Value Reference
      ↓
Is the value actually changed?
      ↓
   Yes       No
    ↓         ↓
Consumers    No unnecessary
update       Context update
```

---

## 🧠 Key Takeaway

> **Split Context by responsibility and avoid changing the Provider value unnecessarily.**

A well-structured Context architecture helps keep your React application easier to maintain and can reduce unnecessary rendering work.

## 🛠️ Technologies Used

* React
* TypeScript
* React Context API
* useContext
* useMemo
* useCallback

## 📚 What I Learned

* How React Context triggers updates
* Why Context structure matters for performance
* How `useMemo` can stabilize Provider values
* How `useCallback` can stabilize function references
* Why splitting Context by responsibility is important
* How to separate state and actions for better optimization
* The difference between optimizing props with `React.memo` and managing Context updates

## 👨‍💻 Author

**Sukhendra Lodhi**

Happy Coding! 🚀
