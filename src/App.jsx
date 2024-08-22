import Header from './components/Header/index';
import Aside from './components/Aside/index';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/index';

function App() {
  return (
    <>
      <Header/>
      <Aside/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
