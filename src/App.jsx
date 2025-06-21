import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';

function App() {
  const HomePage = lazy(() => import('./components/HomePage'))

  return (
    <Router>
        <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<HomePage />}/>
            </Route>
          </Routes>
        </Suspense>
        

    </Router>
     
  )
}

export default App
