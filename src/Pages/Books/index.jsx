import React, { useState } from 'react'
import image from '../../images/bookImg.jpg';
import './index.css'

function Books() {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('')
    const [res, setRes] = useState([]);

    function validateBook() {
        if (name === '') {
            alert('Kitobning ismini kiriting!')
            return false
        }
        if (author.length < 3) {
            alert('Yozuvchi ismini togri kiriting!');
            return false
        }
        return true
    }

    function onApply(e) {
        e.preventDefault();
        const isValid = validateBook()
        if (!isValid) {
            return
        }
        const data = {
            name: name,
            author: author,
        }
        const copied = [...res];
        copied.push(data)
        setRes(copied)
        setName('')
        setAuthor('')
    }
    return (
        <div className='book'>
            <div className="container book-container">
                <h1>Find the book and Add book!</h1>
                <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='bookname' id='bookInput' />
                <input value={author} onChange={(e) => { setAuthor(e.target.value) }} type="text" placeholder='book Author' id='authorInput' />
                <button onClick={onApply}>APPLY</button>
                <div className="bookTake">
                    {
                        res.length > 0 && res.map((book, index) => {
                            return (
                                <div className="bookUI" key={index}>
                                    <img src={image} width={100} height={100} alt="" />
                                    <div>{book.name.toUpperCase()}</div>
                                    <div>{book.author}</div>
                                </div>
                            )
                        })
                    }  
                    salom 
                </div>
            </div>
        </div>
    )
}

export default Books
