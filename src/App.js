import './Components/Background'
import './Components/Searchbar'
import './App.css';
import Background from './Components/Background';
import {Users} from './Components/data'
import {useState} from 'react'



function App() {
  const [query, setQuery] = useState('')
  
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
    <input type='text'
     id='name'
      placeholder='Search...'
       className='input-text'
        onChange={e=> setQuery(e.target.value)}/>
    </div>
      
      <div>
      <ul>
        {Users.map((user) => (
          <li key={user.id} className='listitem'>{user.title},{user.firstName}, {user.lastName}</li>
        ))}
    </ul>
    </div>
    </div>
  );
}

export default App;
