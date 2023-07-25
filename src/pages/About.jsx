import React from 'react'
import Layout from './Layout'
import AboutSection from './../components/about/AboutSection'
import GallerySection from '../components/gallery/GallerySection'

function About() {
  return (
    <Layout>
      <AboutSection/>
      <section>
        <div className="container">
          <GallerySection/>
        </div>
      </section>
    </Layout>
  )
}

export default About
