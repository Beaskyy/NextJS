import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <Head>
      <title>About Codevolution</title>
      <meta name='description' content='Free tutorials on web development' />
    </Head>
    <div className='content'>About</div>
    </>
  )
}

export default About

About.getLayout = function PageLayout(page) {
  return (
    <>
    {page}
    <Footer />
    </>
  )
}