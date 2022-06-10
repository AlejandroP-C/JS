export { getRacetrackByID }

import { racetrackInfo } from "../components/api.js";

function getRacetrackByID(raceTrackID) {

    let token = localStorage.getItem("idToken");

    if (token) {

        let uri = `/racetrack.json/`;

        let divRa = document.querySelector("#racetracks");
        divRa.innerHTML = '';

        racetrackInfo(uri, token, divRa, raceTrackID);

    }
    
}