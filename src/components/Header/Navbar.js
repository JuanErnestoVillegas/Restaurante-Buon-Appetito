import React, {useState, useContext} from "react";
import "./Navbar.css";
import {HiMenuAlt2 } from "react-icons/hi";
import {RiCloseFill } from "react-icons/ri";
import {Link, useLocation} from "react-router-dom";
import {AiOutlineLogin} from "react-icons/ai";
import {MdOutlineSocialDistance, MdOutlineContactSupport} from "react-icons/md";
import { UserContext } from "../../context/UserContext";




const Navbar = () => {
  const {auth, logout, user} = useContext(UserContext);
  const location = useLocation()
  console.log(location)

  const [menuClick, setMenuclick] = useState(false);

  const toggleMenu = () =>{
    setMenuclick(!menuClick);
  };

  
  

  return (

    <nav className="navbar">
        <a className="navbar_logo" href="/" >Buon Appetito</a>

        {menuClick?(
          <HiMenuAlt2 size={25} className="navbar_menu" onClick={toggleMenu}/>
          ):(
          <RiCloseFill size={25} className="navbar_menu" onClick={toggleMenu}/>
        )}

      <ul className={menuClick ? "navbar_list" : "navbar_list navbar_list--active"}>
        
            {location.pathname=="/login"?
            <>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/aboutUs"><MdOutlineSocialDistance className="m-2"/>Nosotros</Link>
            </li>
            <li className="navbar_item" >
<<<<<<< HEAD
              <Link className="navbar_link" to="contact"><MdOutlineContactSupport className="m-2"/>Contacto</Link>
=======
              <Link className="navbar_link" to="/contacto"><MdOutlineContactSupport className="m-2"/>Contacto</Link>
>>>>>>> 652b8119c41ca3da5cfc97f33d7eb912c26872c6
            </li>
            </>
            :
            auth? 
            <>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/aboutUs"><MdOutlineSocialDistance className="m-2"/>Nosotros</Link>
            </li>
            <li className="navbar_item" >
<<<<<<< HEAD
              <Link className="navbar_link" to="/contact"><MdOutlineContactSupport className="m-2"/>Contacto</Link>
=======
              <Link className="navbar_link" to="/contacto"><MdOutlineContactSupport className="m-2"/>Contacto</Link>
>>>>>>> 652b8119c41ca3da5cfc97f33d7eb912c26872c6
            </li>
            <li className="navbar_item" >
              <Link className="navbar_link" to="#" onClick={logout}><MdOutlineContactSupport className="m-2" />Cerrar sesión</Link>
            </li>
            {user?.role=='ADMIN'?
            <li className="navbar_item" >
              <Link className="navbar_link" to="/admin" ><MdOutlineContactSupport className="m-2" />Administrar</Link>
            </li>
            :null}
            </>
            :
            <>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/login"><AiOutlineLogin className="m-2"/>Ingresar</Link>
            </li>
            <li className="navbar_item" >
              <Link className="navbar_link" to="/aboutUs"><MdOutlineSocialDistance className="m-2"/>Nosotros</Link>
            </li>
            <li className="navbar_item" >
<<<<<<< HEAD
              <Link className="navbar_link" to="/contact"><MdOutlineContactSupport className="m-2"/>Contacto</Link>
=======
              <Link className="navbar_link" to="/contacto"><MdOutlineContactSupport className="m-2"/>Contacto</Link>
>>>>>>> 652b8119c41ca3da5cfc97f33d7eb912c26872c6
            </li>
            </>
            }
           
          
       
      </ul>
    </nav>
  );
};


export default Navbar;