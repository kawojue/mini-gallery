import { useContext } from 'react'
import Context from './components/Context'
import Gallery from './components/Gallery'
import LoadPlace from './components/LoadPlace'

function App() {
  const { data, openModal } = useContext(Context)

  return (
    <main>
      <section className={`page-1 ${openModal ? 'hide' : ''}`}>
        {data.map((place, index) => (
          <LoadPlace key={index} places={place} />
        ))}
      </section>

      <section className={`page-2 md:px-10 ${!openModal ? 'hide' : ''}`}>
        <Gallery />
      </section>
    </main>
  )
}

export default App
