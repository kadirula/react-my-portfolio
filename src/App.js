import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import { routes } from './routes';

function App() {

  return (
    <div className='bg-dark'>
      <Router>
        <Header />
        <Routes>
          {
            routes.map(route => (
              <Route
                path={route.path}
                element={
                  <route.element />
                }
              />
            ))}
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
