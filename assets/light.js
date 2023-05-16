function lightMode() {
    var header = document.getElementsByTagName('head')[0];
    var styleSheet = document.createElement('link');
    styleSheet.rel = 'stylesheet';
    styleSheet.type = 'text/css';
    styleSheet.href = '/assets/style_light.css'; // name of your css file
    styleSheet.media = 'all';
    header.appendChild(styleSheet);
}

function workInProgress() {
    alert("Work in progress");
}
