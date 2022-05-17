function clock() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var year = currentDate.getFullYear() % 100;
    var day = days[currentDate.getDay()];
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var useDay = "- ".concat(day, " - ");
    var useDate = "".concat(date, " ").concat(month, " ").concat(year, " ");
    var useTime = "".concat(hours, ":").concat(minutes);
    document.getElementById("date").innerHTML = useDate;
    document.getElementById("day").innerHTML = useDay;
    document.getElementById("time").innerHTML = useTime;
}
function searchQuery(event){
    if (event.keyCode != 13){
        return;
    }
    var query = document.getElementById("search-bar").value;
    query = query.split(" ");
    query = query.join("+");
    console.log(query);
    window.location.assign("https://duckduckgo.com/?t=ffab&q="+ query);
}
clock();
setInterval(clock, 1000);