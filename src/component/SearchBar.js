// const API_KEY = 'MwFQDr7TXsIx46HjflmYA9M2X5pCIy-Wg0F-jkEGaLU'; // Replace with your Unsplash API key
// const URL = `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`;
import React, { useState } from 'react'

const SearchBar = ({ setImages }) => {
    const [query, searchQuery] = useState('')

    const fetchData = async () => {
        const API_KEY = 'MwFQDr7TXsIx46HjflmYA9M2X5pCIy-Wg0F-jkEGaLU' // Replace with your Unsplash API key
        const URL = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`)
        let data = await URL.json()
        setImages(data.results || []) //It returns the value of its first operand if the first operand is truthy. Otherwise, it returns the value of its second operand.
    }

    const handleClick = (e) => {
        e.preventDefault()
        fetchData()
    }
    return (
        <>
            <div className='searchBar'>
                <input type='text' value={query} onChange={(s) => searchQuery(s.target.value)} placeholder='Search for photos...' />
                <button onClick={handleClick}>Search</button>
            </div>
        </>
    )
};

export default SearchBar
