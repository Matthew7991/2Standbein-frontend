import { Routes, Route, Link } from "react-router-dom"
import "./App.css"
import Admin from "./components/pages/Admin"
import Protected from "./components/shared/Protected"
import Home from "./components/pages/Home"

function App() {
  return (
    <>
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
    </>
  )
}

export default App
