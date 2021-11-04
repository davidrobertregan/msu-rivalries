import { useState } from 'react'

function Login({setCurrentUser}) {

    const [formData, setFormData ] = useState({username: '', password: ''})

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {

        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch("api/login", configObj)
        .then(r => {
            if(r.ok) {
                r.json()
                .then(user => setCurrentUser(user))
                setFormData({username: '', password: ''})
            } else {
                r.json()
                .then(errors => console.log(errors.error))
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="userform">
            <label>Username</label>
            <input onChange={handleChange} value={formData.username} type="text" name="username"></input>
            <label>Password</label>
            <input onChange={handleChange} value={formData.password} type="password" name="password"></input>
            <input type="submit"></input>
        </form>
    )
}

export default Login