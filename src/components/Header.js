import { Link } from 'react-router-dom';
import logo from '../logo.png';


const Header = () => {

    return(
        <header>
             {/* --------------------Header------------------------ */}
            <nav className='navbar navbar-expand bg-danger text-danger' >
                <Link className='navbar-brand' to='/'><img
                    src={logo}
                    height="60"
                    padding="0"
                    alt=""
                    loading="Milad Pokedex App"
                /></Link>

                <span className="h4 navbar-text text-warning ">
                    Pokedex App
                </span>
   

            </nav>
        </header>
    );
}

export default Header;