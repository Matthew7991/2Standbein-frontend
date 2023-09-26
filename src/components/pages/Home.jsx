import React, { useState, useEffect } from "react"
import Login from "../shared/Login"
import getProducts from "../../utilities/getProducts"
import ProductItem from "../shared/ProductItem"

function Home() {
  const [products, setProducts] = useState([])
  const [isAdmin, setIsAdmin] = useState(false)

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

  return (
    <>
      <Login />
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
