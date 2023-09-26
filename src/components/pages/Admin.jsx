import React, { useState, useEffect } from "react"
import AddProduct from "../shared/AddProduct"
import getProducts from "../../utilities/getProducts"

function Admin() {
  const [productCount, setProductCount] = useState(0)
  useEffect(() => {
    getProducts().then((data) => setProductCount(data.length))
  }, [])
  return (
    <>
      <div>Welcome to the Admin Page</div>
      <AddProduct />
      <p>edit product</p>
      <p>see orders</p>
      <p>top verkaufsprodukte</p>
      <p>Product Count: {productCount}</p>
    </>
  )
}

export default Admin
