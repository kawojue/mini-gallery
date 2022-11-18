import dataImages from '../data'
import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const [cities, setCity] = useState([])
    const [active, setActive] = useState(0)
    const [natures, setNature] = useState([])
    const [activeList, setActiveList] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [activeImage, setActiveImage] = useState({})

    const mapImages = () => {
        let cities = []
        let natures = []

        dataImages.forEach(image => {
            if (image.place === 'city') {
                cities.push(image)
            }
            if (image.place === 'nature') {
                natures.push(image)
            }
        })

        setCity(cities)
        setNature(natures)
    }

    const close = () => {
        setOpenModal(!openModal)
        setActive(0)
        setActiveImage(0)
        setActiveList([])
    }

    const view = (id, category, place) => {
        setOpenModal(!openModal)
        if (category === 'city') {
            setActiveList(cities)
        }
        if (category === 'nature') {
            setActiveList(natures)
        }

        setActiveImage(place)
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

    useEffect(() => {
        mapImages()
    }, [])

    return (
        <Context.Provider value={{
            cities, natures, move,
            openModal, setOpenModal,
            activeImage, view, activeList,
            active, close
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
