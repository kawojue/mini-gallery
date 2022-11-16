import { useContext } from 'react'
import Context from './components/Context'
import LoadPlace from './components/LoadPlace'

function App() {
  const { cities, natures } = useContext(Context)

  return (
    <main>
      <section className="page-1 hide">
        <LoadPlace places={natures} />
        <LoadPlace places={cities} />
      </section>

      <section className="page-2">
        <p>Hello, World!</p>
        <p>Test</p>
      </section>
    </main>
  )
}

export default App
