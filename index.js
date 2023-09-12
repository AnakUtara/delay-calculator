const inputBpm = document.querySelector("#bpm-input");
const resultSel = document.querySelector("#result-type");
const resultOpt = resultSel.value;
const submitBtn = document.querySelector(".submit-btn");

const delayCalc = {
    notes: (bpm) => {
        return 60000 / bpm;
    },
    dotted: (bpm) => {
       return delayCalc.notes(bpm) * 1.5;
    },
    triplet: (bpm) => {
        return delayCalc.notes(bpm) * 0.667;
    },
    hzConverter: (ms) => {
        const hertz = 1000 / ms;
        return hertz.toFixed(3);
    },
}

submitBtn.addEventListener("click", resetInput);
document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {resetInput();} return;
});


function resetInput () { 
    if (inputBpm.value.match(/^[^\d]+$/)){
        alert("Input Numbers Only!");
        inputBpm.value = "";
    } else
    if (inputBpm.value <= 9) {
        alert("Invalid BPM. Please enter a value more than 10.");
        inputBpm.value = "";
    } else 
    if (inputBpm.value >= 10){
        showResult();
    }
}

function result (subDiv, delayType){
    switch (subDiv){
        case "1":
            return delayType(Number(inputBpm.value)) * 4;
        case "1/2":
            return delayType(Number(inputBpm.value)) * 2;
        case "1/4":
            return delayType(Number(inputBpm.value));
        case "1/8":
            return delayType(Number(inputBpm.value)) / 2;
        case "1/16":
            return delayType(Number(inputBpm.value)) / 4;
        case "1/32":
            return delayType(Number(inputBpm.value)) / 8;
        case "1/64":
            return delayType(Number(inputBpm.value)) / 16;
        case "1/128":
            return delayType(Number(inputBpm.value)) / 32;
    }
}

const msTable = document.querySelectorAll(".ms");
const hzTable = document.querySelectorAll(".hz");

function showResult () {
    switch (resultSel.value){
        case "Notes":
        msTable[0].textContent = result("1", delayCalc.notes).toFixed(1);
        hzTable[0].textContent = delayCalc.hzConverter(result("1", delayCalc.notes));
        msTable[1].textContent = result("1/2", delayCalc.notes).toFixed(1);
        hzTable[1].textContent = delayCalc.hzConverter(result("1/2", delayCalc.notes));
        msTable[2].textContent = result("1/4", delayCalc.notes).toFixed(1);
        hzTable[2].textContent = delayCalc.hzConverter(result("1/4", delayCalc.notes));
        msTable[3].textContent = result("1/8", delayCalc.notes).toFixed(1);
        hzTable[3].textContent = delayCalc.hzConverter(result("1/8", delayCalc.notes));
        msTable[4].textContent = result("1/16", delayCalc.notes).toFixed(1);
        hzTable[4].textContent = delayCalc.hzConverter(result("1/16", delayCalc.notes));
        msTable[5].textContent = result("1/32", delayCalc.notes).toFixed(1);
        hzTable[5].textContent = delayCalc.hzConverter(result("1/32", delayCalc.notes));
        msTable[6].textContent = result("1/64", delayCalc.notes).toFixed(1);
        hzTable[6].textContent = delayCalc.hzConverter(result("1/64", delayCalc.notes));
        msTable[7].textContent = result("1/128", delayCalc.notes).toFixed(1);
        hzTable[7].textContent = delayCalc.hzConverter(result("1/128", delayCalc.notes));
        break;
        case "Dotted":
        msTable[0].textContent = result("1", delayCalc.dotted).toFixed(1);
        hzTable[0].textContent = delayCalc.hzConverter(result("1", delayCalc.dotted));
        msTable[1].textContent = result("1/2", delayCalc.dotted).toFixed(1);
        hzTable[1].textContent = delayCalc.hzConverter(result("1/2", delayCalc.dotted));
        msTable[2].textContent = result("1/4", delayCalc.dotted).toFixed(1);
        hzTable[2].textContent = delayCalc.hzConverter(result("1/4", delayCalc.dotted));
        msTable[3].textContent = result("1/8", delayCalc.dotted).toFixed(1);
        hzTable[3].textContent = delayCalc.hzConverter(result("1/8", delayCalc.dotted));
        msTable[4].textContent = result("1/16", delayCalc.dotted).toFixed(1);
        hzTable[4].textContent = delayCalc.hzConverter(result("1/16", delayCalc.dotted));
        msTable[5].textContent = result("1/32", delayCalc.dotted).toFixed(1);
        hzTable[5].textContent = delayCalc.hzConverter(result("1/32", delayCalc.dotted));
        msTable[6].textContent = result("1/64", delayCalc.dotted).toFixed(1);
        hzTable[6].textContent = delayCalc.hzConverter(result("1/64", delayCalc.dotted));
        msTable[7].textContent = result("1/128", delayCalc.dotted).toFixed(1);
        hzTable[7].textContent = delayCalc.hzConverter(result("1/128", delayCalc.dotted));
        break;
        case "Triplet":
        msTable[0].textContent = result("1", delayCalc.triplet).toFixed(1);
        hzTable[0].textContent = delayCalc.hzConverter(result("1", delayCalc.triplet));
        msTable[1].textContent = result("1/2", delayCalc.triplet).toFixed(1);
        hzTable[1].textContent = delayCalc.hzConverter(result("1/2", delayCalc.triplet));
        msTable[2].textContent = result("1/4", delayCalc.triplet).toFixed(1);
        hzTable[2].textContent = delayCalc.hzConverter(result("1/4", delayCalc.triplet));
        msTable[3].textContent = result("1/8", delayCalc.triplet).toFixed(1);
        hzTable[3].textContent = delayCalc.hzConverter(result("1/8", delayCalc.triplet));
        msTable[4].textContent = result("1/16", delayCalc.triplet).toFixed(1);
        hzTable[4].textContent = delayCalc.hzConverter(result("1/16", delayCalc.triplet));
        msTable[5].textContent = result("1/32", delayCalc.triplet).toFixed(1);
        hzTable[5].textContent = delayCalc.hzConverter(result("1/32", delayCalc.triplet));
        msTable[6].textContent = result("1/64", delayCalc.triplet).toFixed(1);
        hzTable[6].textContent = delayCalc.hzConverter(result("1/64", delayCalc.triplet));
        msTable[7].textContent = result("1/128", delayCalc.triplet).toFixed(1);
        hzTable[7].textContent = delayCalc.hzConverter(result("1/128", delayCalc.triplet));
        break;
    }
}
