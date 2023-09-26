import React from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const login = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

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
      <form onSubmit={login}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button>Login</button>
      </form>
    </>
  )
}

export default Login
