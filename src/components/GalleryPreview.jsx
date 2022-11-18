import Context from './Context'
import { useState, useContext } from 'react'

const GalleryPreview = ({ data }) => {
    const { setActiveImage, setActive, activeList, active } = useContext(Context)
    const [activeImg, setActiveImg] = useState(false)

    const handlePreview = (img) => {
        setActiveImage(img)
        setActive(activeList.indexOf(img))
    }

    return (
        <img src={data.img} className={`img ${activeImg ? 'active' : ''}`}
            alt={data.title} onClick={() => handlePreview(data)} />
    )
}

export default GalleryPreview
