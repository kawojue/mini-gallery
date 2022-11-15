import dataImages from '../data'
import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const [city, setCity] = useState([])
    const [nature, setNature] = useState([])

    const mapImages = () => {
        let cities = []
        let natures = []

        dataImages.forEach(image => {
            if (image.category === 'city') {
                cities.push(image)
            }
            if (image.category === 'nature') {
                natures.push(image)
            }
        })

        setCity(cities)
        setNature(natures)
    }

    useEffect(() => {
        mapImages()
    }, [])


    console.log(city)
    console.log(nature)

    return (
        <Context.Provider value={{
            city, nature
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context