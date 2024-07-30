
import './App.css';

import {useState} from 'react';

import SearchFilter from './searchFilter';

function App() {

  const searchitem = ['pavan','kalyan','uma','divya','kavya','ravi' , 'pavan kalyan','akash','tarun','kiran','pavan kumar','ravi kiran' , 'leela'] ;

  const [s , updates] = useState('')

   
  return (
    // <div className='container'>

    //   <div className='search'>

    //     <input type='text' placeholder='search here......' value={s}  onChange={(e)=>{
    //       updates(e.target.value)
    //       }} />

    //   </div>

    //   <div className='items'>
    //   {
        
    //     searchitem.filter((val)=>{ 
    
    //       if(s === '')
    //       {
    //         return val;
    //       }
    //       else if(val.toLocaleLowerCase().includes(s.toLocaleLowerCase()))
    //       {
    //         return val;
    //       }
    //       else{
    //         return '';
    //       }
          
    //     }).sort().map((val , idx)=>{return <h1 key={idx}>{val.toUpperCase()}</h1>
    //     })
    //   }
    //   </div>

    // </div>
<SearchFilter></SearchFilter>
  );
}

export default App;
