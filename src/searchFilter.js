
import data from './data.json';
import './searchFilter.css';

import {useState} from 'react';


function SearchFilter() {
    const items = data.users;

    const [search,updateSearch] = useState('');
    
    return(<div className='parent'>

        <input type='text' placeholder='search here.....' value={search} onChange={(e)=>{
            updateSearch(e.target.value);
        }} />

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PROFILE PIC</th>
                    <th>ROLE</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.filter((val)=>{
                        if(search === "")
                        {
                            return val;
                        }
                        else if(val.name.toLowerCase().includes(search.toLowerCase()))
                        {
                            return val;

                        }

                        return "";
                    }).map((v)=>{return(
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name.toUpperCase()}</td>
                            <td><img src={v.image} alt={v.name}  /></td>
                            <td>{v.role.toUpperCase()}</td>
                        </tr>
                    )
                        
                    })
                }
            </tbody>
        </table>

    </div>)
}

export default SearchFilter;