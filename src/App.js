import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import Testimonials from './Components/junior/Testimonial-grid-section/Testimonials';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/Components/testimonials' element={<Testimonials></Testimonials>} />
        </Routes>
      </Router>
    </div>
  )

}

export default App