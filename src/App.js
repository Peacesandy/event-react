import './Components/Background'
import './Components/Searchbar'
import './App.css';
import Background from './Components/Background';
import {Users} from './Components/data'
import {useState} from 'react'
import Table from './Components/Table';



function App() {
  const [query, setQuery] = useState('')

  const keys = [ 'title', 'firstName', 'lastName']

  const search = (data)=>{
    return data.filter(
      (item) =>
    keys.some(key=>item[key].toLowerCase().includes(query) )
    )
  }
  
  return (
    <div className="App"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(218, 112, 214), rgba(250, 128, 114), rgba(248, 222, 126))`,
      height: '600px',
      width: '1345px',
      justifyContent: 'center'
  }}        >
      <Background/>
      <div className='input-group'>
        <label></label>
    <input 
       type='text'
       placeholder='Search by name....'
       className='input-text'
        onChange={(e)=> setQuery(e.target.value)}/>
    </div>
      <Table data={search(Users)}/>
    </div>

  );
}

export default App;
