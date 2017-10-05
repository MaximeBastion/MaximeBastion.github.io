// Open ?
function isOpen(openDays, openTimes) {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    if (openDays.indexOf(day) !== -1) {    /* Sur un jour de travail ? */
        var hours = openTimes[day];
        if (betweenHours(date, hours)) {
            return true;
        }
    }
    return false;
}

function betweenHours(date, hours) {
    var hour = date.getHours();
    var min = date.getMinutes();
    var hm = hour + min/100;
    var hmStart = hours[0] + hours[1]/100;
    var hmStop = hours[2] + hours[3]/100;
    return (hm >= hmStart && hm <= hmStop);
}



openDays = [1, 2, 3, 4, 5];
openTimes = {1: [7, 30, 18, 0], 2: [7, 30, 18, 0], 3: [7, 30, 18, 0], 4: [7, 30, 18, 0], 5: [7, 30, 18, 0]};
openCloseText = $( "span#openClose" );
if (isOpen(openDays, openTimes)) {
    openCloseText.html( "Ouvert" );
    openCloseText.addClass("open");

} else {
    openCloseText.html( "Fermé" );
    openCloseText.addClass("closed");
}

