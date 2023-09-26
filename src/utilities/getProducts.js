export default async function getProducts() {
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + "/api/products"
  )
  const data = await response.json()
  console.log(data)
  return data
}
