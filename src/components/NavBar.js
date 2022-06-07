import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

const NavBar = () => {
    return (
        <navbar className = "navbar-flex">
            <nav className = "nav-flex">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">mail</a></li>  
            </nav>
            <h1><a href="#">Velas y Aromas</a></h1>
            <nav className = "nav-flex">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Universo</a></li>
              <div className="iconoCarrito">  
                <li><a href="#"><CartWidget/></a></li>  
              </div>              
            </nav>
        </navbar>
        
    )
    
}

export default NavBar