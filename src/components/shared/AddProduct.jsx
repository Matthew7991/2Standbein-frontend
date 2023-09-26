import React from "react"

function AddProduct() {
  const addProduct = async (event) => {
    event.preventDefault()

    const formdata = new FormData(event.target)

    const response = await fetch(
      import.meta.env.VITE_SERVER_URL + "/api/products",
      {
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: formdata,
      }
    )
    if (response.ok) {
      event.target.reset()
    }
  }

  return (
    <form
      onSubmit={addProduct}
      className="grid grid-cols-2 gap-y-2">
      <label htmlFor="title">title</label>
      <input
        className="border border-gray-200"
        type="text"
        name="title"
        id="title"
      />
      <label htmlFor="category">category</label>
      <input
        className="border border-gray-200"
        type="text"
        name="category"
        id="category"
      />
      <label htmlFor="description">description</label>
      <textarea
        className="border border-gray-200"
        type="text"
        name="description"
        id="description"
      />
      <label htmlFor="price">price</label>
      <input
        className="border border-gray-200"
        type="number"
        name="price"
        id="price"
      />
      <label htmlFor="stock">stock</label>
      <input
        className="border border-gray-200"
        type="number"
        name="stock"
        id="stock"
      />
      <button>Add Product</button>
    </form>
  )
}

export default AddProduct
