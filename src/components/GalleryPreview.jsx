import Context from './Context'
import { useContext } from 'react'

const GalleryPreview = () => {
    const { } = useContext(Context)

    return (
        <article className="preview-container">
            <img src="../../images/city-1.jpeg" className="w-28 img" />
            <img src="../../images/city-2.jpeg" className="w-28 img" />
            <img src="../../images/city-3.jpeg" className="w-28 img" />
        </article>
    )
}

export default GalleryPreview
