import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [mail, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState("")
    const [display, setDisplay] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({ name, mail, password })

        setLoading(true)
        setMsg("")
        setDisplay("")

        setTimeout(() => {
            setName("")
            setEmail("")
            setPassword("")
            setLoading(false)
            setMsg("You Data Has Been Submitted")
            setDisplay(`${name},   
                 ${mail}`)
        }, 2000
        )
    }

    return (
        <form className='form' onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
            <input
                type="email"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={mail}
                required
            />
            <input
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? "Processing" : "submit"}

            </button>

            {/* Loader message */}
            <p>{msg}</p>
            <p>{display}</p>

        </form>
    )
}

export default Form

