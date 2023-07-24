import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <Layout>
      <section>
        <div className="container">
          <div className='not-found'>
            <span>404</span>
            <Link to='/'>Əsas səhifə</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NoPage
