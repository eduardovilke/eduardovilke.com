import Head from 'next/head'
import { About } from '../components/About'
import { WorkExperience } from '../components/WorkExperiencie'

interface HomeProps {
  title: string;
  description: string;
  image: string;
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Eduardo Vilke',
      description: 'Full Stack Developer',
      image: '/eduardo-face.png',
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
