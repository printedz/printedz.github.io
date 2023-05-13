function registerScript(scriptPath) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.setAttribute('data-goatcounter', 'https://printerbox.goatcounter.com/count');
    scriptTag.src = scriptPath;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(scriptTag, s);
}

if (navigator.doNotTrack == 0 || navigator.doNotTrack == null) {
    registerScript("//gc.zgo.at/count.js")
    console.log("SAY HI TO TRACKING!! ENABLE DO NOT TRACK HEADERS IN YOUR WEB BROWSER TO DISABLE IT!!")
} 
if (navigator.doNotTrack == 1) {
    console.log("Telemetry disabled, DNT header found")
}