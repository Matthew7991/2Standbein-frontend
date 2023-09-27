export default async function getOrders() {
  const response = await fetch(
    import.meta.env.VITE_SERVER_URL + "/api/orders",
    {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  )
  const data = await response.json()
  console.log(data)
  return data
}
