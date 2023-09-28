import React from "react"
import ProductForm from "./ProductForm"

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
    <section>
      <h2>Add Product</h2>
      <ProductForm
        submitFunction={addProduct}
        buttonText={"Add Product"}
      />
    </section>
  )
}

export default AddProduct
