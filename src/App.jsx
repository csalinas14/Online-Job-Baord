import Background from './images/redBG.jpg';
import './App.css';

function App() {
  return (
      <div className="App">
        <div style={{
          backgroundImage: "url(" + Background + ")",
          backgroundPosition: 'center',
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat'
        }}></div>
      </div>
  );
}

export default App;
