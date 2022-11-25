import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import { routes } from './routes';

function App() {

  return (
    <div>
      <Router>
        <Header />
        <div className='container'>
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
        </div>
      </Router>

    </div>
  );
}

export default App;
