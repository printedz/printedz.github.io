const sleep = ms => new Promise(r => setTimeout(r, ms));
async function goBack() {
    await sleep(3000);
    history.back();
}

document.addEventListener("DOMContentLoaded", function() {
    goBack();
});