import React from 'react'
import Layout from './Layout'
import AboutSection from './../components/about/AboutSection'
import GalleryPhoto from '../components/gallery/GalleryPhoto'

function About() {
  return (
    <Layout>
      <AboutSection/>
      <section>
        <div className="container">
          <GalleryPhoto/>
        </div>
      </section>
    </Layout>
  )
}

export default About
