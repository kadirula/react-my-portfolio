import { useState } from 'react';
import { useSelector } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const [text, setText] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];


  const handleAddBlog = () => {
    console.log(text);
  }

  const { user } = useSelector(state => state.auth);

  return (
    <div className='bg-dark min-vh-100'>
      <ToastContainer position='top-right' />
      <Router>
        <Header />
        <Routes>
          {
            routes.map(route => (
              <Route
                path={route.path}
                element={
                  (route.auth && !user) ?
                    <PrivateRoute>
                      <route.element />
                    </PrivateRoute>
                    :
                    <route.element />
                }
              />
            ))}
        </Routes>
      </Router>

      {/* <ReactQuill theme="snow" value={text} onChange={setText}
        modules={modules}
        formats={formats}>
      </ReactQuill>
      <button onClick={handleAddBlog}>Added</button>

      <hr/>

      <div dangerouslySetInnerHTML={{__html: text}}></div> */}
    </div>
  );
}

export default App;
