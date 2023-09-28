import React from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const login = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    console.log(formData)

    const response = await fetch(
      import.meta.env.VITE_SERVER_URL + "/api/login",
      {
        method: "POST",
        body: formData,
      }
    )

    if (!response.ok) return

    const data = await response.json()
    localStorage.setItem("token", data)
    navigate("/admin")
  }

  return (
    <>
      <form
        onSubmit={login}
        className="flex items-center gap-4">
        <div>
          <div className="flex gap-2">
            <label
              className="flex-auto"
              htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className="flex gap-2">
            <label
              className="flex-auto"
              htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
            />
          </div>
        </div>
        <button className="bg-[#ffe81e] rounded-lg px-8 py-1 text-2xl font-medium">
          Login
        </button>
      </form>
    </>
  )
}

export default Login
