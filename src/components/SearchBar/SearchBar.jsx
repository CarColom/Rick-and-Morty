import style from "./SearchBar.module.css";
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
          
         <input className={style.search} type='search'placeholder="Buscar un personaje del 1 al 826" onChange={handleChange} value={id} />
         
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      
      </div>
   );
}