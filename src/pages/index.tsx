import type { NextPage } from 'next'
import { About } from '../components/About'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <section className="about">
          <About />
        </section>
        <section className="projects">
          <h2>projetos</h2>
        </section>
      </div>
      
    </div>
  )
}

export default Home
