// App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from '../src/componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Footer from './componentes/Footer/Footer';
import Main from './componentes/Main/Main';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Sidebar />
      <Header onSearch={handleSearch} />
      <Main searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
