import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home'
import AddResourse from './components/AddResourse/AddResourse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [view, setView] = useState('home')

  const goToHome = () => {
    setView('home')
  }

  const handleAddItem = () => {
    setView('addItem')
  }

  const toastOption = { position: toast.POSITION.TOP_LEFT }

  const accepted = () => {
    toast.success("Item added successfully !!", toastOption)
    goToHome()
  }

  const rejected = () => {
    toast.error("Error occured while creating item.", toastOption)
    goToHome()
  }

  const mainContent = () => {
    switch (view) {
      case 'home':
        return <Home />
      case 'addItem':
        return <AddResourse goToHome={goToHome} accepted={accepted} rejected={rejected} />

      default:
        return <Home />

    }
  }

  return (
    <div className="App">
      <nav style={{ borderBottom: "1px solid grey", height: '72px', background: "#FFFFFF" }}>
        <button className="addItemButton" onClick={handleAddItem} >ADD ITEM</button>
      </nav>
      {mainContent()}
      <ToastContainer />
    </div>
  );
}

export default App;
