import React, { useState, useEffect } from "react"
import AddProduct from "../shared/AddProduct"
import getProducts from "../../utilities/getProducts"
import { Link } from "react-router-dom"
import OrderItem from "../shared/OrderItem"
import getOrders from "../../utilities/Orderfetches"

function Admin() {
  const [productCount, setProductCount] = useState(0)
  const [orders, setOrders] = useState([])
  useEffect(() => {
    getProducts().then((data) => setProductCount(data.length))
  }, [])

  useEffect(() => {
    getOrders().then((data) => setOrders(data))
  }, [])

  return (
    <>
      <h1>Welcome to the Admin Page</h1>
      <AddProduct />
      <Link to={"/"}>Home to edit Products</Link>
      <section>
        <h2>Orders</h2>
        <div>
          {orders.map((order) => (
            <OrderItem
              key={order._id}
              order={order}
            />
          ))}
        </div>
      </section>
      <p>top verkaufsprodukte</p>
      <p>Product Count: {productCount}</p>
    </>
  )
}

export default Admin
