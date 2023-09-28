import React from "react"
import ProductList from "./ProductList"

function OrderItem({ order }) {
  return (
    <div>
      <p>Order date {new Date(order.date).toDateString()}</p>
      <p>Status: {order.state}</p>
      <p>Preis: {order.price}</p>
      <ProductList products={order.products} />
    </div>
  )
}

export default OrderItem
