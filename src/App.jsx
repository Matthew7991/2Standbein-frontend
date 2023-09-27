import { Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Admin from "./components/pages/Admin"
import Protected from "./components/shared/Protected"
import Home from "./components/pages/Home"
import { createContext, useState } from "react"

export const ShoppingCart = createContext([])

function App() {
  const [shoppingCart, setShoppingCart] = useState([])

  return (
    <>
      <ShoppingCart.Provider value={{ shoppingCart, setShoppingCart }}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route element={<Protected />}>
            <Route
              path="/admin"
              element={<Admin />}
            />
            <Route
              path="/admin/orders"
              element={<Admin />}
            />
            <Route
              path="/admin/products"
              element={<Admin />}
            />
          </Route>
        </Routes>
      </ShoppingCart.Provider>
    </>
  )
}

export default App
