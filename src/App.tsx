import './App.scss';
import Home from './pages/home';
import Navbar from '@/common/components/navbar';
import { Route, Routes } from 'react-router';
import Footer from '@/common/components/footer';
import Empty from '@/pages/empty';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Empty />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
