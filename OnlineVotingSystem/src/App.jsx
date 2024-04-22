
import Scrollbars from 'react-custom-scrollbars-2'
import SideBar from './components/Nav/SideBar'
import Routers from './routes/Routers'
import NavBar from './components/Nav/NavBar'

function App() {
  return (<>
  <NavBar/>
    <SideBar />
    <div className=" h-screen ">
      <Routers />
    </div>
  </>)
}

export default App
