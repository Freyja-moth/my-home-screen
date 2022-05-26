const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function clock() {
    var currentDate = new Date();

    var date = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var year = currentDate.getFullYear() % 100;

    var day = days[currentDate.getDay()];
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    
    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    date = String(date).padStart(2, "0")

    var useDate = `${date} ${month} ${year}`
    var useDay = day;
    var useTime = `${hours}:${minutes}`

    document.getElementById("clock").innerHTML = `${useDate} - ${useDay} - ${useTime}`;
}
function searchQuery(event){
    if (event.keyCode != 13){
        return;
    }
    var query = document.getElementById("search-bar").value;
    
    query = query.replaceAll("+", "%2B");        

    query = query.split(" ");
    query = query.join("+");

    window.location.assign("https://duckduckgo.com/?t=ffab&q="+ query);
}

clock();
setInterval(clock, 1000);