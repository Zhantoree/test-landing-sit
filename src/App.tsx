import './App.scss'
import Home from "./pages/home";
import Navbar from '@/common/components/navbar';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<></>} />
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
