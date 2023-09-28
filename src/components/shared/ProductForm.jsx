import React from "react"

function ProductForm({ submitFunction, buttonText, product = {} }) {
  return (
    <form onSubmit={submitFunction}>
      <div className="grid grid-cols-2 gap-y-2">
        <label htmlFor="title">Title</label>
        <input
          className="border border-gray-200"
          type="text"
          name="title"
          id="title"
          defaultValue={product.title}
        />
        <label htmlFor="category">Category</label>
        <input
          className="border border-gray-200"
          type="text"
          name="category"
          id="category"
          defaultValue={product.category}
        />
        <label htmlFor="description">Description</label>
        <textarea
          className="border border-gray-200"
          type="text"
          name="description"
          id="description"
          defaultValue={product.description}
        />
        <label htmlFor="price">Price</label>
        <input
          className="border border-gray-200"
          type="number"
          name="price"
          id="price"
          defaultValue={product.price}
        />
        <label htmlFor="stock">Stock</label>
        <input
          className="border border-gray-200"
          type="number"
          name="stock"
          id="stock"
          defaultValue={product.stock}
        />
        <label htmlFor="image">Image</label>
        <input
          type="file"
          name="image"
          id="image"
        />
      </div>
      <button className="px-8 py-1 text-2xl font-medium text-white bg-orange-500 rounded-full ">
        {buttonText}
      </button>
    </form>
  )
}

export default ProductForm
