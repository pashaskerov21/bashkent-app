import Layout from './Layout'
import AboutSection from './../components/about/AboutSection'
import FilialSection from './../components/filial/FilialSection'
import FoodCateforySection from '../components/home/FoodCateforySection'
import PartnerSection from '../components/home/PartnerSection'
import BlogSection from '../components/home/BlogSection'
import CommentHomeSection from '../components/home/CommentHomeSection'
import ContactHomeSection from '../components/home/ContactHomeSection'
import GallerySection from '../components/gallery/GallerySection'





function Home() {

  return (
    <Layout>
      <AboutSection/>
      <FilialSection/>
      <FoodCateforySection/>
      <PartnerSection/>
      <BlogSection/>
      <GallerySection/>
      <CommentHomeSection/>
      <ContactHomeSection/>
    </Layout>
  )
}

export default Home
