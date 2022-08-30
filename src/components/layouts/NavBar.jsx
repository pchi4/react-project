import styles from "../home/HomeStyle.module.css";

function NavBar(){
    return(
        <nav class="navbar">
            <div class="container-fluid">
                <div className={styles.divW}>
                    <img src="/marca_lojistas.svg" alt="icone-marca" className={styles.marcaLoja}></img>
                </div>
                <ul class="nav nav-tabs ml-5 mr-5">
                    <li class="nav-item text-center p-1">
                        <a class="fw-bold text-center text-dark text-decoration-none list-group-item active"  aria-current="true" href="/home"><img class="nav-link" alt="icone" src="/icone_lojas.svg"></img></a>
                        <a class="fw-bold text-center text-dark d-none d-sm-block text-decoration-none" href="/home"><span id="lojas" className={styles.lojas}>Lojas</span></a>
                    </li>
                    <li class="nav-item text-center p-1">
                        <a class="fw-bold text-center text-dark text-decoration-none" href="/"><img class="nav-link" alt="icone" src="/icone_sair.svg"></img></a>
                        <a class="fw-bold  d-none d-sm-block text-dark text-decoration-none" href="/"><span id="logout" className={styles.logout}>Sair</span></a>
                    </li> 
                </ul>
            </div>
        </nav>
    )
}

export default NavBar; 