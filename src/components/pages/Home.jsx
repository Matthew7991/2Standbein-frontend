import React, { useContext, useState, useEffect } from "react"
import Login from "../shared/Login"
import { Reloading, ShoppingCart } from "../../App"
import ProductList from "../shared/ProductList"
import getProducts from "../../utilities/getProducts"

function Home() {
  const shoppingCartState = useContext(ShoppingCart)
  const [products, setProducts] = useState([])
  const reloadContext = useContext(Reloading)

  useEffect(() => {
    getProducts().then((data) => setProducts(data))
  }, [reloadContext.reload])

  const buyProducts = () => {
    const addOrder = async () => {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL +
          "/api/orders?ids=" +
          shoppingCartState.shoppingCart.join(","),
        { method: "POST" }
      )
      if (response.ok) {
        shoppingCartState.setShoppingCart([])
      }
    }
    addOrder()
  }

  return (
    <>
      <header className="flex justify-between">
        <section className="flex items-center gap-4">
          <p className="text-xl font-bold">
            Items in shopping Cart:{" "}
            <span className="text-orange-500">
              {shoppingCartState.shoppingCart.length}
            </span>
          </p>
          <button
            className="bg-[#ffe81e] rounded-lg px-8 py-1 text-2xl font-medium"
            onClick={buyProducts}>
            Order
          </button>
        </section>
        <Login />
      </header>
      <main className="flex flex-col gap-6">
        <ProductList products={products} />
      </main>
    </>
  )
}

export default Home
