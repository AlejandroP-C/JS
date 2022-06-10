export { Footer };

class Footer {

    constructor() { }

    renderFooter() {
        
        app.footer.innerHTML = `
      
            <a href="https://www.motogp.com/" target="_blank" rel="noopener noreferrer">
                <img class="footer_logo" src="https://css.motogp.com/w2015/img/logos/motogp_white.svg">
            </a>

            <p>© 2022 Dorna Sports SL. All rights reserved.</p>

        `;

    }

}