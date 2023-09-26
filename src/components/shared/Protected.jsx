import React, { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function Protected() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const authToken = async () => {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "/api/admin/auth",
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      if (!response.ok) {
        navigate("/")
      } else {
        setAuth(true)
      }
    }
    authToken()
  }, [])

  return <>{auth && <Outlet />}</>
}

export default Protected
