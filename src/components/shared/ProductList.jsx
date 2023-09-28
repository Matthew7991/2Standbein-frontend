import React, { useState, useEffect } from "react"
import ProductItem from "./ProductItem"

function ProductList({ products }) {
  const [isAdmin, setIsAdmin] = useState(false)

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
    <div className="flex flex-col gap-6">
      {products.map((product) => (
        <ProductItem
          key={product._id}
          product={product}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  )
}

export default ProductList
