function updateClock() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var realDate = new Date(Date.now());

    var hours = realDate.getHours();
    var minutes = realDate.getMinutes();

    var day = days[realDate.getDay()];
    var date = realDate.getDate();
    var month = months[realDate.getMonth()];
    var year = realDate.getFullYear()%100;

    var useDay = `- ${day} - `
    var useDate = `${date} ${month} ${year} `;
    var useTime = `${hours}:${minutes}`

    document.getElementById("date").innerHTML = useDate;
    document.getElementById("day").innerHTML = useDay;
    document.getElementById("time").innerHTML = useTime;
}

updateClock();
setInterval(updateClock, 1000);