import React, { useEffect, useState } from 'react'
import './index.css'
import { filmAPI } from '../../axios';

function Film() {
    const [film, setFilm] = useState('');
    const [res, setRes] = useState([])
    const APIkey = '8b7383a1'

    function onSeacrh(e) {
        e.preventDefault()
        filmAPI.get(`?s=${film}&apikey=${APIkey}`)
            .then(response => {
                if (response.status == 200) {
                    setRes(response.data.Search)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log(res);
    return (
        <div className='film'>
            <div className="container film-container">
                <h1>Find your favourite film!</h1>
                <input value={film} onChange={(e) => { setFilm(e.target.value) }} type="text" placeholder='film name: ' id='filmInput' />
                <button onClick={onSeacrh} className='btnCenter'>SEARCH</button>
                { }
            </div>
        </div>
    )
}

export default Film
