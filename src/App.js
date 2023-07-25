import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Filial from './pages/Filial'
import Food from './pages/Food'
import Gallery from './pages/Gallery'
import Menu from './pages/Menu'
import Comment from './pages/Comment'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import BlogDetail from './pages/BlogDetail'
import Blogs from './pages/Blogs'
import { useEffect } from 'react'
import SearchResult from './pages/SearchResult'


function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/filial' element={<Filial />} />
        <Route path='/food' element={<Food />} />
        <Route path='/food/:foodCategoryID' element={<Food />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/:galleryCategory' element={<Gallery />} />

        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:menuCategory' element={<Menu />} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogName' element={<BlogDetail />} />
        <Route path='*' element={<NoPage />} />
        <Route path='/404' element={<NoPage />} />
        <Route path='/search' element={<SearchResult/>}/>
      </Routes>
    </>
  );
}

export default App;
