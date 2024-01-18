import Head from 'next/head'

import { About } from '@components/About'
import { Navbar } from '@components/Navbar'
import { WorkExperience } from '@components/WorkExperiencie'
import { NextConfig } from 'next'

interface HomeProps {
  title: string;
  description: string;
  image: string;
}

export async function getStaticProps(context: NextConfig) {
  return {
    props: {
      title: 'Eduardo Vilke',
      description: 'Full Stack Developer',
      image: '/eduardo-face.png',
      messages: (await import(`../dictionaries/${context.locale}.json`)).default
    },
  }
}

const Home = ({ title, description, image }: HomeProps) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://eduardovilke.com" property="og:url" />
        <meta content={`https://eduardovilke.com${image}`} property="og:image" />
      </Head>
      <div className="container mx-auto px-4 my-16">
        <Navbar />
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <About />
          <WorkExperience />
        </div>
      </div>
    </>
  )
}

export default Home
