export { Header };

class Header {

    constructor() { }

    renderHeader() {
        
        app.header.innerHTML = `
      
            <link rel="stylesheet" href="src/assets/css/header.css">

            <div class="toolbar-row">

                <div class="img__header simarro">

                    <a href="https://www.ieslluissimarro.org/" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/images/logo_simarro.png" class="rounded logo_simarro">
                    </a>
        
                </div>

                <div class="header__menu">

                    <button class="header__menu__content"><a href="#/home">Home</a></button>
                    <button class="header__menu__content"><a href="#/contact">Contact</a></button>

                </div>

                <div class="dropdown img__header user">
                    <a href="#" role="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="src/assets/images/default_user.png" class="user_img">
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="userDropdown">
                        <li>
                            <a class="logout" href="#/logout">
                                <i class="fa-solid fa-right-to-bracket"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        `;

    }

}