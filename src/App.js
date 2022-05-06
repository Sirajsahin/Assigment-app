
import './App.css';
import React from 'react';
import UserTable from './Component/UserTable';
// import User  from './Component/User';

function App() {
  // const [flage,setFlage]=useState(false)
  return(
    <div className='App'>
      {/* {flage?null:<UserTable/>} */}
      <UserTable/>
    </div>
  )
}

export default App;
