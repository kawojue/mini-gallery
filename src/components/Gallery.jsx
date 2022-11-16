import Context from './Context'
import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Gallery = () => {

    const { openModal, setOpenModal } = useContext(Context)

    return (
        <>
            <button className="close"
                onClick={() => setOpenModal(!openModal)}>
                <MdClose />
            </button>
            <div>
                <article className="show-conatiner">
                    <FaAngleLeft className="ico" />
                    <img src="../../images/city-1.jpeg" className="w-96 image" />
                    <FaAngleRight className="ico" />
                </article>
                <article className="preview-container">
                    <img src="../../images/city-1.jpeg" className="w-28 img" />
                    <img src="../../images/city-2.jpeg" className="w-28 img" />
                    <img src="../../images/city-3.jpeg" className="w-28 img" />
                </article>
            </div>
        </>
    )
}

export default Gallery