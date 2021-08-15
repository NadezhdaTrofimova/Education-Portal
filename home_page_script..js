function zeroTime (value) {
    return ((value < 10) ? (value = '0' + value) : value);
}
function timePage() {
    let currentTime = new Date();
    let hours = zeroTime(currentTime.getHours());
    let minutes = zeroTime(currentTime.getMinutes());
    document.querySelector('.clock').innerHTML = hours + ':' + minutes;
    setTimeout('timePage()', 1000);
}

timePage()