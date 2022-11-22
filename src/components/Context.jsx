import data from '../data'
import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const [active, setActive] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [activeImage, setActiveImage] = useState({})
    const [activeList, setActiveList] = useState([])

    const view = (image) => {
        setOpenModal(true)
        setActiveImage(image)
        setActive(image.id - 1)

        if (image.category === 'nature') {
            setActiveList(data[0])
        }

        if (image.category === 'city') {
            setActiveList(data[1])
        }
    }

    const move = (action) => {
        const lastElement = activeList.length - 1

        if (action === 'next') {
            if (active === lastElement) {
                setActive(0)
            } else {
                setActive(active + 1)
            }
        }

        if (action === 'prev') {
            if (active === 0) {
                setActive(lastElement)
            } else {
                setActive(active - 1)
            }
        }

        setActiveImage(activeList[active])
    }

    const close = () => {
        setActive(0)
        setActiveList([])
        setActiveImage({})
        setOpenModal(false)
    }

    return (
        <Context.Provider value={{
            data, view, close, move,
            openModal, activeList,
            activeImage, active
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
