

function isOpen(openDays, openTimes) {
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
    if (openDays.indexOf(day) !== -1) {    /* Sur un jour de travail ? */
        var hours = openTimes[day];
        if (betweenHours(hour, openTimes[day])) {
            return true;
        }
    }
    return false;
}

function betweenHours(hour, hours) {
    return (hour >= hours[0] && hour < hours[1]);
}

openDays = [1, 2, 3, 4, 5];
openTimes = {1: [8, 18], 2: [8, 18], 3: [8, 18], 4: [8, 18], 5: [8, 18]};
alert(isOpen(openDays, openTimes));