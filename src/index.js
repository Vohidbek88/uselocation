import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import More from './components/More';
import { store } from './components/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/more/:id' element={<More/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

