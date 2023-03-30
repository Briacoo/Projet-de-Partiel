import '../Styles/HeaderStyles.css'
import { AiOutlineUser } from 'react-icons/ai'

function Header() {
    return ( 
        <header className='header' >
            <div className='navbar'>
                <div>
                    <a href="/">
                        <img className='logo' src="/logo.png" alt="Logo 'Trouve ma voiture'" />
                    </a>
                </div>
                <div className='liens'>
                <a href="/">Accueil</a>
                <a href="">Maps</a>
                <a href="">Contact</a>
                </div>
                <div>
                    <a className='user' href="">
                        <AiOutlineUser size="25px"/>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;