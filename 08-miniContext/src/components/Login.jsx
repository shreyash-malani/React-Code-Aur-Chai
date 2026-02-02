import React, { useState, useContext } from "react"
import UserContext from "../context/UserContext"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }

  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-bold">Login</h2>

        <input
          type="text"
          className="border rounded px-3 py-1 text-black"
          value = {username}
          
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        {" "}
        <input
          className="border rounded px-3 py-1 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        {" "}

        <button onClick={handleSubmit}>
          Submit
        </button>
    </div>
  )
}
export default Login 