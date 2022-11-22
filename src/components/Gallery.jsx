import Context from './Context'
import { useContext, useState } from 'react'
import { MdClose } from 'react-icons/md'
import GalleryPreview from './GalleryPreview'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'


const Gallery = () => {
    const { close, activeList, move, activeImage } = useContext(Context)

    return (
        <>
            <button className="close"
                onClick={() => close()}>
                <MdClose />
            </button>
            <div>
                <article className="container">
                    <div className="img-container">
                        <div className="btn-img-container">
                            <button className="ico md:text-5xl"
                                onClick={() => move('prev')} >
                                <FaAngleLeft />
                            </button>
                            <img src={activeImage.img} className="image md:h-[20rem]" />
                            <button className="ico md:text-5xl"
                                onClick={() => move('next')}>
                                <FaAngleRight />
                            </button>
                        </div>
                        <h3 className="title md:text-3xl">
                            {activeImage.title}
                        </h3>
                    </div>
                </article>

                <article className="preview-container">
                    {activeList.map(data => (
                        <GalleryPreview data={data} key={data.id} />
                    ))}
                </article>
            </div>
        </>
    )
}

export default Gallery
