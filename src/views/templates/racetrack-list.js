export { getRacetracksList }

function getRacetracksList(racetracks) {

    const racetracksTemplate = 
    
    `
    
        <div class="app-item">

            <div class="mat-card">

                <div>
                    <img class="flag" src="src/${racetracks.flag}">
                    <div class="mat-card-header">
                        <div class="mat-card-header-text">
                            <div class="mat-card-title">${racetracks.raceTrackID} - ${racetracks.GPName}</div>
                            <div class="mat-card-subtitle">${racetracks.name}<br>${racetracks.country}</div>
                        </div>
                    </div>
                </div>

                <div class="mat-card-content">
                    <img src="./src/${racetracks.mapURL}">
                </div>

                <hr class="dropdown-divider">

                <div class="mat-card-actions">
                    <a href="https://www.google.es/maps/place/${racetracks.coordinates}" target="_blank">
                        <button mat-button><i class="fa-solid fa-map"></i></button>
                    </a>
                    <a href="./#/racetrack/${racetracks.raceTrackID}">
                        <button mat-button><i class="fa-solid fa-circle-info"></i></button>
                    </a>
                </div>

            </div>    

        </div>

    `;

    return racetracksTemplate;

}