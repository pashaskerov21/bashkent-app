import React from 'react'
import Layout from './Layout'
import SectionTitle from '../components/SectionTitle'

function NoPage() {
  return (
    <Layout>
      <section>
        <div className="container">
          <SectionTitle title='Səhifə Tapılmadı'/>
        </div>
      </section>
    </Layout>
  )
}

export default NoPage
