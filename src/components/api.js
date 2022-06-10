export { racetrackList, racetrackInfo }

import { getRacetrackItem } from "../views/templates/racetrack-item.js";
import { getRacetracksList } from "../views/templates/racetrack-list.js";


const obtenirDadesAPI = async (uri, token) => {
    const response = await fetch("https://projecteangular-7effc-default-rtdb.firebaseio.com/" + uri + `?auth=${token}`);
    const data = await response.json();
    return data;
};

function printWithTemplate(querySelector, template) {
    querySelector.innerHTML += template;
}

async function racetrackList(uri, token, querySelector) {
    const data = await obtenirDadesAPI(uri, token);
    data.forEach(element => {
        printWithTemplate(querySelector, getRacetracksList(element));
    });
}

async function racetrackInfo(uri, token, querySelector, id) {
    let data = await obtenirDadesAPI(uri, token);
    data = data.filter(racetrack => racetrack.raceTrackID === id);
    data.forEach(element => {
        printWithTemplate(querySelector, getRacetrackItem(element));
    });
}