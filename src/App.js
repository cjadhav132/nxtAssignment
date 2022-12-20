import './App.css';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <nav style={{ borderBottom: "1px solid grey", height: '72px', background: "#FFFFFF" }}>
        <button className="addItemButton" >ADD ITEM</button>
      </nav>
      <Home />
    </div>
  );
}

export default App;
