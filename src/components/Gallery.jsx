import Context from './Context'
import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import GalleryPreview from './GalleryPreview'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


const Gallery = () => {

    const { move, activeImage, close } = useContext(Context)

    return (
        <>
            <button className="close"
                onClick={() => close()}>
                <MdClose />
            </button>
            <div>
                <article className="show-img-conatiner">
                    <button className="ico" onClick={() => move('prev')}>
                        <FaAngleLeft />
                    </button>
                    <img src={activeImage.img} className="w-96 image" />
                    <button className="ico" onClick={() => move('prev')} >
                        <FaAngleRight />
                    </button>
                </article>
                <GalleryPreview />
            </div>
        </>
    )
}

export default Gallery