import dataImages from '../data'
import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const [cities, setCity] = useState([])
    const [natures, setNature] = useState([])

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

    useEffect(() => {
        mapImages()
    }, [])

    return (
        <Context.Provider value={{
            cities, natures
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context