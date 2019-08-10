var secs = document.getElementsByClassName('sec');

function clearSecs(sec) {
    for (var i = 0; i < secs.length; i++) {
        secs[i].style.display = 'none';
    }
    secs[sec].style.display = 'block';
}

function catSelected(btn, num) {
    clearSecs(num);
}

window.onload = () => {
    clearSecs(0);
}