import dataImages from '../data'
import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const [cities, setCity] = useState([])
    const [active, setActive] = useState(0)
    const [natures, setNature] = useState([])
    const [openModal, setOpenModal] = useState(false)

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

    const move = (action, list) => {
        const lastElement = list.length - 1
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
    }

    const gallery = () => {

    }

    useEffect(() => {
        mapImages()
    }, [])

    return (
        <Context.Provider value={{
            cities, natures, move,
            openModal, setOpenModal
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
