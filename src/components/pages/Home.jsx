import React, { useState, useEffect, useContext } from "react"
import Login from "../shared/Login"
import getProducts from "../../utilities/getProducts"
import ProductItem from "../shared/ProductItem"
import { ShoppingCart } from "../../App"

function Home() {
  const [products, setProducts] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)
  const shoppingCartState = useContext(ShoppingCart)

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    const authToken = async () => {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "/api/admin/auth",
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      if (response.ok) {
        setIsAdmin(true)
      }
    }
    authToken()
  }, [])

  const buyProducts = () => {
    const addOrder = async () => {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL +
          "/api/orders?ids=" +
          shoppingCartState.shoppingCart.join(","),
        { method: "POST" }
      )
      if (response.ok) {
        shoppingCartState.setshoppingCart([])
      }
    }
    addOrder()
  }

  return (
    <>
      <Login />
      <p>
        Items in shopping Cart: {shoppingCartState.shoppingCart.length}
      </p>{" "}
      <button onClick={buyProducts}>Order</button>
      <div>
        {products.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </>
  )
}

export default Home
