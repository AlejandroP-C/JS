export { getRacetrackItem }

function getRacetrackItem(racetrack) {

    const racetrackTemplate = 
    
    `
    
        <div class="app-item-detail">

            <div class="mat-card">

                <div>
                    <img class="flag" src="src/${racetrack.flag}">
                    <div class="mat-card-header">
                        <div class="mat-card-header-text">
                            <div class="mat-card-title">${racetrack.raceTrackID} - ${racetrack.GPName}</div>
                            <div class="mat-card-subtitle">${racetrack.name}<br>${racetrack.country}</div>
                        </div>
                    </div>
                </div>

                <div class="mat-card-content">
                    
                    <div class="c-statistics">

                        <div class="c-statistics__content">
            
                            <h3 class="c-statistics__title">Circuit Record:</h3>
            
                            <div class="c-statistics__time">${racetrack.fastestLap}</div>
            
                            <div class="c-statistics__rider">
            
                                <div class="c-statistics__rider-name">${racetrack.racerFL}</div>
                                <div class="c-statistics__rider-scuderia">${racetrack.teamFL}</div>
                                <div class="c-statistics__record-year">${racetrack.yearFL}</div>
            
                            </div>
            
                        </div>
            
                    </div>

                </div>

            </div>    

        </div>

    `;

    return racetrackTemplate;

}