import './Components/Background'
import './Components/Searchbar'
import './App.css';
import Background from './Components/Background';
import Searchbar from './Components/Searchbar';

function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(218, 112, 214), rgba(250, 128, 114), rgba(248, 222, 126))`,
      height: '600px',
      width: '1345px',
      justifyContent: 'center'
  }}        >
      <Background/>
      <Searchbar/>
    </div>
  );
}

export default App;
