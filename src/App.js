import React, { useState } from 'react'
import SearchBar from './component/SearchBar';
import ImageGallery from './component/ImageGallery';
import './App.css';

function App() {
  const [images, setImages] = useState([''])
  return (
    <>
      <div className='finalApp'>
        <h1>Snapshot Images</h1>
        <SearchBar setImages={setImages} />
        <ImageGallery images={images} />
      </div>
    </>
  )
}

export default App
