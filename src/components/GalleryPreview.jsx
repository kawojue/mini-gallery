import Context from './Context'
import { useState, useContext } from 'react'

const GalleryPreview = ({ data }) => {
    const { activeImage, active } = useContext(Context)

    return (
        <img src={data.img} className={`img ${data[active] === activeImage ? 'active' : ''}`}
            alt={data.title} />
    )
}

export default GalleryPreview
