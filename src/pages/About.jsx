import React from 'react'
import Layout from './Layout'
import AboutSection from './../components/about/AboutSection'
import GalleryPhotos from '../components/gallery/GalleryPhotos'

function About() {
  return (
    <Layout>
      <AboutSection titleStatus='d-none'/>
      <section>
        <div className="container">
          <GalleryPhotos/>
        </div>
      </section>
    </Layout>
  )
}

export default About
