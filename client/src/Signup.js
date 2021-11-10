import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Signup({setCurrentUser, setErrors}) {

    const [formData, setFormData ] = useState({ username: '', email:'', password: '', password_confirmation: '' })

    let history = useHistory()

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

        fetch("/signup", configObj)
        .then(r => {
            if(r.ok) {
                r.json()
                .then(user => setCurrentUser(user))
                setFormData({username: '', email: '', password:'', password_confirmation: ''})
                history.push("/")
            } else {
                r.json()
                .then(errors => setErrors(errors.errors))
            }
        })
    }

    return(

        <form className="userform" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange}></input>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}></input>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}></input>
            <label>Password confirmation</label>
            <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>

    )
}

export default Signup