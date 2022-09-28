import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import { routes } from './routes';

function App() {

  return (
    <div className='bg-dark min-vh-100'>
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
      </Router>
    </div>
  );
}

export default App;
