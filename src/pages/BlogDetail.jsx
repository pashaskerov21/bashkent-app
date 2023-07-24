import React, { useContext } from 'react'
import Layout from '../pages/Layout'
import { MainContext } from '../context/MainContext'
import { useParams } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'

function BlogDetail() {
  const { blogArr } = useContext(MainContext)
  const { blogName } = useParams()
  const blog = blogArr.find((blog) => blog.title === blogName)
  return (
    <Layout>
      <section className="blog-detail">
        <div className="container">
          <SectionTitle title={blog?.title} />
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="blog-img">
                <img src={blog?.img} alt="blog-img" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="blog-content">
                <div className="text">
                  <p>{blog?.text}</p>
                </div>
                <div className="date">
                  <span>{blog?.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogDetail
