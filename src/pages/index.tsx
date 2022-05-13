import type { NextPage } from 'next'
import Head from 'next/head'
import { About } from '../components/About'
import { WorkExperience } from '../components/WorkExperiencie'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Eduardo Vilke</title>
      </Head>
      <div className="container mx-auto my-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <About />
          <WorkExperience />
        </div>
      </div>
    </>
  )
}

export default Home
