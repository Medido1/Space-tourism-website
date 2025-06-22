import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import FallBack from './components/FallBack';

const HomePage = lazy(() => import('./components/HomePage'));
const Destination = lazy(() => import('./components/Destination'));
const Crew = lazy(() => import('./components/Crew'));
const Technology = lazy(() =>import('./components/Technology'));

function App() {
  return (
    <Router>
        <Suspense fallback={<FallBack />}>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage />}/>
              <Route path='destination' element={<Destination />}/>
              <Route path='crew' element={<Crew />}/>
              <Route path='technology' element={<Technology />}/>
              <Route path="*" element={<div className="text-black p-10">Page Not Found</div>} />
            </Route>
          </Routes>
        </Suspense>
    </Router>
  )
}

export default App
