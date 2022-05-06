
import './App.css';
import { useEffect, useState } from 'react';
import _ from "lodash";
import UserTable from './Component/UserTable';
import User  from './Component/User';

function App() {
  const [flage,setFlage]=useState(false)
  return(
    <div className='App'>
      {flage?<User/>:<UserTable/>}
    </div>
  )
}

export default App;
