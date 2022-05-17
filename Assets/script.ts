function clock(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let currentDate = new Date()

    let date = currentDate.getDate()
    let month = months[currentDate.getMonth()]
    let year = currentDate.getFullYear()%100

    let day = days[currentDate.getDay()]

    let hours = currentDate.getHours()
    let minutes = currentDate.getMinutes()

    var useDay = `- ${day} - `
    var useDate = `${date} ${month} ${year} `;
    var useTime = `${hours}:${minutes}`

    document.getElementById("date").innerHTML = useDate
    document.getElementById("day").innerHTML = useDay
    document.getElementById("time").innerHTML = useTime
}

clock();
setInterval(clock, 1000)