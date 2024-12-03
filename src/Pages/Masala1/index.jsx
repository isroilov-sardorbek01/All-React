import React, { useState, useEffect } from 'react'
import { https } from '../../axios'
import './index.css'

function Masala1() {
    const [name, setName] = useState('')
    const [lastName, setLastname] = useState('')
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('')
    const [users, setUsers] = useState([]);

    
    function validate() {
        if (name.length < 2) {
            alert('Ism 2ta belgidan kam bolmasin!');
            return false
        }
        if (lastName.length < 3) {
            alert('Familiya 3ta belgidan kam bolmasligi kerak!');
            return false
        }
        if (phone.length != 13) {
            alert('Telefon  toliq togri bosin!');
            return false
        }
        if (!phone.startsWith('+998')) {
            alert('Nomer +998 bilan boshlansin');
            return false
        }
        if (username.length < 2) {
            alert('Username 2ta belgidan kam bolmasin!');
            return false
        }
        return true
    }

    useEffect(function () {
        https('users')
            .then(response => {
                if (response.status == 200) {
                    setUsers(response.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function handleApp(e) {
        e.preventDefault();
        const isValid = validate();

        const user = {
            name: name,
            lastName: lastName,
            username: username,
            phone: phone,
            id: Date.now()
        }
        if (!isValid) {
            return
        }
        https.post('users', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    let copied = [...users]
                    copied.push(response.data)
                    setUsers(copied)
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(function () {
                setName('')
                setPhone('');
                setUsername('')
                setLastname('')
            })
    }

    return (
        <div>
            <div className="form-container">
                <div className="form">
                    <h1>find User</h1>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Name' />
                    <input value={lastName} onChange={(e) => { setLastname(e.target.value) }} type="text" placeholder='Lastname' />
                    <input value={phone} onChange={(e) => { setPhone(e.target.value) }} type="tel" placeholder='Enter a number' />
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='username' />
                    <div className="btnCenter">
                        <button onClick={handleApp}>APPLY</button>
                    </div>
                </div>
                <div className="cardWr">
                    {users.length > 0 && users.map((user, index) => {
                        return (
                            <div className="card" key={index}>
                                <h1>{user.name}</h1>
                                <h2>{user.lastName}</h2>
                                <h3>{user.username}</h3>
                                <h2>{user.phone}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Masala1
