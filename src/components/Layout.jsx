import './Header'
import Header from './Header';
import '../App.css'
import Footer from './Footer'
import '../JS/resize.js'
import { Outlet } from 'react-router-dom'




function Layout() {
    return ( 
        <>
            <div className='App'>
                <Header />
                <main className='content'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Layout;