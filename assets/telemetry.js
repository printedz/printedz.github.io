function registerScript(scriptPath) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.setAttribute('data-goatcounter', 'https://printerbox.goatcounter.com/count');
    scriptTag.src = scriptPath;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(scriptTag, s);
}

const telemetryOn = document.createElement("p");
const telemetryOff = document.createElement("p");
const telemetryDiv = document.querySelector(".telemetry");

telemetryOff.textContent = "Telemetry disabled, DNT header found";
telemetryOn.textContent = "Telemetry enabled, DNT header not found";

if (navigator.doNotTrack == 1) {
    console.log("Telemetry disabled, DNT header found")
    console.log("https://www.eff.org/issues/do-not-track")
    telemetryDiv.appendChild(telemetryOff);
} else {
    registerScript("//gc.zgo.at/count.js")
    console.log("SAY HI TO TRACKING!! ENABLE DO NOT TRACK HEADERS IN YOUR WEB BROWSER TO DISABLE IT!!")
    console.log("https://www.eff.org/issues/do-not-track")
} 

// document.querySelector(".telemetry").