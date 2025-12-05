
import MovieCard from './Components/Moviecard'
import Navbar from './Components/Navbar';
import Favorite from './Pages/Favorites';
import Home from './Pages/Home';
import {Routes,Route} from "react-router-dom"
function App() {


  return (
    <div>
      <Navbar/>
   <main className='main-content'>
    <Routes>
    <Route  path="/"  element={<Home/>}/>
    <Route  path="/favorites"  element={<Favorite/>}/>

    </Routes>
   </main>
    </div>

  )
}

export default App
