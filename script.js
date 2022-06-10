import { router } from "./src/router/router.js";
import { checkUsuario } from "./src/utils/local_storage.js";

window.app = {};

(function () {

    document.addEventListener("DOMContentLoaded", function () {

        app.header = document.querySelector("#header");
        app.container = document.querySelector("#container");
        app.footer = document.querySelector("#footer");

        if (checkUsuario()) {
            window.location.hash = '#/home';
        } else {
            window.location.hash = "#/login";
        }

        router(window.location.hash);

    });

    window.addEventListener("hashchange", () => {
        router(window.location.hash);
    });

})();