export { router };
import { Header } from "../views/header.js";
import { Login } from "../components/login.js";
import { Register } from "../components/register.js";
import { Contact } from "../views/contact.js";
import { Footer } from "../views/footer.js";
import { getRacetrackByID } from "../controllers/racetrack-info.js";
import { getRacetracksList } from "../controllers/racetracks.js";

const router = (route) => {

  let divLogin = document.querySelector("#login");
  divLogin.innerHTML = '';

  let divContact = document.querySelector("#contact");
  divContact.innerHTML = '';

  let divRa = document.querySelector("#racetracks");
  divRa.innerHTML = '';

  console.log(route);

  if (/#\/racetrack\/[0-9]+/.test(route)) {

    console.log("true");
    let raceTrackID = route.split("/")[2];

    getRacetrackByID(raceTrackID);

  } else {

    switch (route) {

      case "#/home":

        let header = new Header();
        header.renderHeader();

        getRacetracksList();

        let footer = new Footer();
        footer.renderFooter();

        break;

      case "#/contact":

        let contact = new Contact();
        contact.renderContact();
        break;

      case "#/login":

        let login = new Login();
        login.renderLogin();
        break;

      case "#/register":

        let register = new Register();
        register.renderRegister();
        break;

      case "#/logout":

        localStorage.clear();
        window.location.reload();
        break;

    }

  }


};