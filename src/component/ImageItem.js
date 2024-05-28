import React from 'react'

const ImageItem = ({ image }) => {

    if (!image || !image.urls || !image.urls.small) {
        console.error('Invalid image data : ', image)
        return null // Return null to render nothing if image data is missing or invalid
    }
    return (
        <div className='imageItem'>
            <img src={image.urls.small} alt={image.description} />
        </div>
    )
}

export default ImageItem
