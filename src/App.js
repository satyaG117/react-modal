import { useState } from 'react';

import './App.css'

import Modal from './Modal';

function App() {
  const [isOpen , setIsOpen] = useState(false);

  const openModal = () => {
    console.log("open")
    setIsOpen(true)
  }
  const closeModal = () => {
    console.log("close")
    setIsOpen(false)
  }
  return (
    <div className="main-container container my-4 border d-flex justify-content-center align-items-center border">
      <Modal 
      visible={isOpen}
      title="Hello"
      body="This is sample text"
      onClose={closeModal}
      />
      <h2></h2>
      <button className="btn btn-info" onClick={openModal}>Click me</button>
      
    </div>
    
  );
}

export default App;
