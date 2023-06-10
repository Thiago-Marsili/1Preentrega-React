import OIG from "../img/OIG.jpg"
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img
                            src={OIG}
                            width="60"
                            height="88"
                        />
                        <span className="navbar-item-text">BuenasPelis</span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Categorias
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    Acción
                                </a>
                                <a class="navbar-item">
                                    Terror
                                </a>
                                <a class="navbar-item">
                                    Comedia
                                </a>
                                <a class="navbar-item">
                                    Aventura
                                </a>
                                <a class="navbar-item">
                                    Ficción
                                </a>
                            </div>
                        </div>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;