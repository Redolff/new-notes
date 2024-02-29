'use client'

import { useState } from "react"
import Logo from "./logo"
import '../style/navbar.css'

const Navbar = () => {
    const [isActive, setActive] = useState(false)
    const userName = 'Federico Redolfo'

    const handleActive = () => {
        setActive(!isActive)
    }

    const handleLogout = () => {
        //logica para cerrar sesion
        //llamada a la API, eliminar cookies, etc.
        //actualizar estado para cerrar seion
        setActive(false)
    }
    
    return (
        <div className="my-nav-bar">
            <Logo />
            <div className="my-form-input">
                <form className="my-form-search">
                    <input placeholder="Search"/>
                </form> 
            </div>
            <div className="my-icono-not">
                <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="30px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"></path>
                </svg>   
            </div>
            <div className="usuarios"> 
                <div onClick={(e) => {
                    e.stopPropagation();
                    if(userName === 'Federico Redolfo'){
                        handleActive()
                    }else{
                        handleUserName('Iniciar sesion')
                    }
                }}>
                    <div className="user-span">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path>
                        </svg>
                        {userName} 
                        <span className={`my-arrow${isActive ? 'active' : ''}`}>&#9660;</span>
                    </div>
                </div>
                {isActive && userName === 'Federico Redolfo' && (
                    <div className="my-dropdown-menu">
                        <button onClick={handleLogout}>Cerrar sesion</button>    
                    </div>
                )}  
            </div>
        </div>
    )
}

export default Navbar