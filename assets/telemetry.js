function registerScript(scriptPath) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.setAttribute('data-goatcounter', 'https://printerbox.goatcounter.com/count');
    scriptTag.src = scriptPath;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(scriptTag, s);
}

if (navigator.doNotTrack == 1) {
    console.log("Telemetry disabled, DNT header found");
    console.log("https://www.eff.org/issues/do-not-track");
} else {
    registerScript("//gc.zgo.at/count.js");
    console.log("SAY HI TO TRACKING!! ENABLE DO NOT TRACK HEADERS IN YOUR WEB BROWSER TO DISABLE IT!!");
    console.log("https://www.eff.org/issues/do-not-track");
}


// if (navigator.doNotTrack == 1) {
//     console.log("Telemetry disabled, DNT header found");
//     console.log("https://www.eff.org/issues/do-not-track");
//     telemetry.append("Telemetry disabled, DNT header found");

//     const message = document.createElement("p");
//     message.textContent = "Telemetry disabled, DNT header found";

//     telemetry.appendChild(message);
// } else {
//     registerScript("//gc.zgo.at/count.js")
//     console.log("SAY HI TO TRACKING!! ENABLE DO NOT TRACK HEADERS IN YOUR WEB BROWSER TO DISABLE IT!!")
//     console.log("https://www.eff.org/issues/do-not-track")
// } 

