import Context from './Context'
import { useContext } from 'react'


const LoadPlace = ({ places }) => {
    const { view } = useContext(Context)
    return (
        <article className='location md:grid-cols-2 lg:grid-cols-3'>
            {places.map(place => (
                <img src={place.img} key={place.id} className="photo"
                    onClick={() => view(place.id, place.place, place)} />
            ))}
        </article>
    )
}

export default LoadPlace
