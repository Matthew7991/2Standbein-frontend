import React, { useContext, useState } from "react"
import { ShoppingCart } from "../../App"

function ProductItem({ product, isAdmin }) {
  const [editing, setEditing] = useState(false)
  const shoppingCartState = useContext(ShoppingCart)

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
      event.target.reset()
      setEditing(false)
    }
  }

  const addToCart = () => {
    shoppingCartState.setShoppingCart((prev) => [...prev, product._id])
    console.log(shoppingCartState.shoppingCart)
  }

  return (
    <article key={product._id}>
      {editing ? (
        <form
          onSubmit={updateProduct}
          className="grid grid-cols-2 gap-y-2">
          <label htmlFor="title">title</label>
          <input
            className="border border-gray-200"
            type="text"
            name="title"
            id="title"
            defaultValue={product.title}
          />
          <label htmlFor="category">category</label>
          <input
            className="border border-gray-200"
            type="text"
            name="category"
            id="category"
            defaultValue={product.category}
          />
          <label htmlFor="description">description</label>
          <textarea
            className="border border-gray-200"
            type="text"
            name="description"
            id="description"
            defaultValue={product.description}
          />
          <label htmlFor="price">price</label>
          <input
            className="border border-gray-200"
            type="number"
            name="price"
            id="price"
            defaultValue={product.price}
          />
          <label htmlFor="stock">stock</label>
          <input
            className="border border-gray-200"
            type="number"
            name="stock"
            id="stock"
            defaultValue={product.stock}
          />
          <button>Update Product</button>
        </form>
      ) : (
        <>
          <h2>{product.title}</h2>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p>{product.price} €</p>
          <p>{product.stock}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </>
      )}
      {isAdmin && (
        <button
          type="button"
          onClick={toggleEditing}>
          {editing ? "Cancel" : "Edit"}
        </button>
      )}
    </article>
  )
}

export default ProductItem
