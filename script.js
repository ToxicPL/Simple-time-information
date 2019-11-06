function time() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (m < 10) {
        m = "0" + m;
    } else if (s < 10) {
        s = "0" + s;
    } else if (h < 10) {
        h = "0" + h;
    }
    var time = h + ":" + m + ":" + s;
    document.getElementById('t1').innerHTML = time;
}

function date() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDay();
    var full = year + "-" + month + "-" + day;
    document.getElementById('t2').innerHTML = full;
}
function day() {
    var today = new Date();
    var d = new Array(7);
    d[0] = "Sunday";
    d[1] = "Monday";
    d[2] = "Tuesday";
    d[3] = "Wednesday";
    d[4] = "Thursday";
    d[5] = "Friday";
    d[6] = "Saturday";

    var day = d[today.getDay()];
    document.getElementById('t3').innerHTML = day;
}