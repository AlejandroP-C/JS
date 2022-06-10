export { getRacetracksList }

import { racetrackList } from "../components/api.js";

function getRacetracksList() {
    
    let token = localStorage.getItem("idToken");

    if (token) {
        
        let uri = `/racetrack.json`;

        let divRa = document.querySelector("#racetracks");

        racetrackList(uri, token, divRa);

    }

}