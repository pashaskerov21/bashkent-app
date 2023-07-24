import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Filial from './pages/Filial'
import Food from './pages/Food'
import Gallery from './pages/Gallery'
import Menu from './pages/Menu'
import Comment from './pages/Comment'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import ScrollToTop from './ScrollToTop'
import BlogDetail from './pages/BlogDetail'
import Blogs from './pages/Blogs'


function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/filial' element={<Filial />} />
          <Route path='/food' element={<Food />} />
          <Route path='/gallery' element={<Gallery />} />

          <Route path='/menu' element={<Menu />} />
          <Route path='/comment' element={<Comment />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogs/:blogName' element={<BlogDetail/>}/>
          <Route path='*' element={<NoPage />} />
          <Route path='/404' element={<NoPage/>}/>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
