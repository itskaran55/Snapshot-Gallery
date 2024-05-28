import React, { useState } from 'react';
import ImageItem from './ImageItem';
// import InfiniteScroll from "react-infinite-scroll-component";

const ImageGallery = ({ images }) => {

    if (images.length === 0) {
        return "No images found..!"
    }

    return (
        <>
            <div className='imageGallery'>
                {images.map((img) => (
                    <ImageItem key={img.id} image={img} />
                ))}
            </div>
        </>
    );
};

export default ImageGallery;
