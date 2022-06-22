import React from 'react';
import Landing from './pages/Landing';
import ComponentPage from './pages/ComponentPage';
import Events from 'pages/Events';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from 'pages/Details';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/components" element={<ComponentPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
