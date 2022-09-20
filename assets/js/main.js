/* Animation */
gifIron();
gifCloud();
gifBike();
gifGary();
gifSonicroll();
gifSonic();

// gif-iron ()
function gifIron() {
    var item = document.getElementById('gif-iron');
    item.animate([
        { left: '-20%' },
        { left: '120%' },
    ], {
        duration: 10000,
        delay: 5000,
        iterations: 1,
        fill: 'forwards'
    });
}

// gif-cloud ()
function gifCloud() {
    var item = document.getElementById('gif-cloud');
    item.animate([
        { right: '-20%' },
        { right: '120%' },
    ], {
        duration: 30000,
        iterations: 20,
        direction: 'alternate',
        fill: 'forwards'
    });
}

// gif-bike ()
function gifBike() {
    var item = document.getElementById('gif-bike');
    item.animate([
        { left: '-50%' },
        { left: '120%' },
    ], {
        duration: 40000,
        iterations: 1,
        fill: 'forwards'
    });
}

// gif-Gary ()
function gifGary() {
    var item = document.getElementById('gif-gary');
    item.animate([
        { right: '-10%' },
        { right: '120%' },
    ], {
        duration: 120000,
        iterations: 1,
        fill: 'forwards'
    });
}

// gif-sonic-roll ()
function gifSonicroll() {
    var item = document.getElementById('gif-sonic-roll');
    item.animate([
        { left: '-20%' },
        { left: '110%' },
    ], {
        duration: 1000,
        delay: 3000,
        iterations: 1,
        fill: 'forwards'
    });
}

// gif-sonic ()
function gifSonic() {
    var item = document.getElementById('gif-sonic');
    item.animate([
        { right: '-100%' },
        { right: '120%' },
    ], {
        duration: 2500,
        delay: 6000,
        iterations: 1,
        fill: 'forwards'
    });
}
