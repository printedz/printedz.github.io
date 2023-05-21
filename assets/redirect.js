const sleep = ms => new Promise(r => setTimeout(r, ms));
async function goBack() {
    await sleep(2800);
    history.back();
}

window.addEventListener("load", function() {
    goBack();
}, true);

