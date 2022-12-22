import { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import nxtLogo from './imgs/nxtLogo.PNG'
import logInLogo from './imgs/logInbasic.png'
import loggedInLogo from './imgs/loggedIn.png'
import Home from './components/Home/Home'
import AddResourse from './components/AddResourse/AddResourse';
import LogInPage from './components/LogInPage/LogInPage';


function App() {

  const [view, setView] = useState('home')
  const [loggedIn, setLogged] = useState(false)

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

  const handleLogin = () => {
    if (!loggedIn) {
      setView('login')
    }
    else {
      setLogged(!loggedIn)
    }
  }

  const doLogIn = () => {
    setLogged(true)
    goToHome()
  }

  const mainContent = () => {
    switch (view) {
      case 'home':
        return <Home />
      case 'addItem':
        return <AddResourse goToHome={goToHome} accepted={accepted} rejected={rejected} />

      case 'login':
        return <LogInPage doLogIn={doLogIn} goToHome={goToHome} />

      default:
        return <Home />

    }
  }

  return (
    <div className="App">
      <nav style={{ borderBottom: "1px solid grey", height: '72px', background: "#FFFFFF" }}>
        <img src={nxtLogo} alt="logo" className='nxtLogo' />
        {view === 'home' ?
          <button className="addItemButton" onClick={handleAddItem} >ADD ITEM</button> :
          null
        }
        <div>
            <img
              src={loggedIn ? loggedInLogo : logInLogo}
              className="profile"
              data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"
              alt=""
            />
          <div className="dropdown-menu">
            <div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={handleLogin} >
              {loggedIn ? 'log out' : 'Log In'}
            </div>
          </div>
        </div>
      </nav>
      {mainContent()}
      <ToastContainer />
    </div>
  );
}

export default App;
