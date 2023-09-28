import React, { useContext, useState } from "react"
import { Reloading, ShoppingCart } from "../../App"
import ProductForm from "./ProductForm"

function ProductItem({ product, isAdmin }) {
  const [editing, setEditing] = useState(false)
  const shoppingCartState = useContext(ShoppingCart)
  const reloadContext = useContext(Reloading)

  console.log(product)

  const toggleEditing = () => {
    setEditing((prev) => !prev)
  }

  const updateProduct = async (event) => {
    event.preventDefault()

    const formdata = new FormData(event.target)
    formdata.set("id", product._id)

    const response = await fetch(
      import.meta.env.VITE_SERVER_URL + "/api/products",
      {
        method: "PUT",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formdata,
      }
    )
    if (response.ok) {
      reloadContext.setReload((prev) => !prev)
      setEditing(false)
    }
  }

  const addToCart = () => {
    shoppingCartState.setShoppingCart((prev) => [...prev, product._id])
    console.log(shoppingCartState.shoppingCart)
  }

  return (
    <article
      key={product._id}
      className="shadow-[0_0_8px_16px_#00000009]">
      {editing ? (
        <ProductForm
          submitFunction={updateProduct}
          buttonText={"Update Product"}
          product={product}
        />
      ) : (
        <div className="flex items-start ">
          <div className="">
            <img
              src={product.imgUrl}
              alt=""
              className="object-contain h-40"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="opacity-70">{product.category}</p>
            <p>{product.description}</p>
            <p
              className={`${
                product.stock <= 3 ? "text-red-600" : ""
              } font-medium`}>
              {product.stock} in Stock
            </p>
            <div className="flex gap-4">
              <p className="text-2xl font-bold">{product.price} €</p>
              <button
                className="bg-[#ffe81e] rounded-full px-8 py-1 text-2xl font-medium"
                onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      {isAdmin && (
        <button
          className="px-8 py-1 text-2xl font-medium text-white bg-red-700 rounded-full "
          type="button"
          onClick={toggleEditing}>
          {editing ? "Cancel" : "Edit"}
        </button>
      )}
    </article>
  )
}

export default ProductItem
