document.addEventListener("DOMContentLoaded", function() {
    const telemetry = document.getElementsByClassName("telemetry")[0];
    if (navigator.doNotTrack == 1) {
        const message = document.createElement("p");
        message.textContent = "Telemetry disabled, DNT header found.";
        message.style.setProperty("font-weight", "bold");  
        message.style.setProperty("text-align", "center");
        telemetry.appendChild(message); } else {
        const message = document.createElement("p");
        message.textContent = "Telemetry enabled, DNT header not found.";
        message.style.setProperty("font-weight", "bold");
        message.style.setProperty("text-align", "center");
        telemetry.appendChild(message); }
});
