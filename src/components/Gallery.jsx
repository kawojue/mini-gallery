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
                <article className="show-img-container">
                    <button className="ico md:text-5xl" onClick={() => move('prev')}>
                        <FaAngleLeft />
                    </button>
                    <div className="img-container">
                        <img src={activeImage.img} className="image md:h-[20rem]" />
                        <h3 className="title md:text-3xl">
                            {activeImage.title}
                        </h3>
                    </div>
                    <button className="ico md:text-5xl" onClick={() => move('next')} >
                        <FaAngleRight />
                    </button>
                </article>
                <GalleryPreview />
            </div>
        </>
    )
}

export default Gallery