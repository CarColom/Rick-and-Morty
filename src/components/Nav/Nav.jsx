import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
  

    return (
        <nav className={style.nav}>

            <div className={style.btns}>
                <Link to='/about'> ABOUT </Link>
                <Link to='/home'> HOME </Link>
                <Link to='/favorites'> FAVORITES </Link>
            
            </div>
                

           
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;