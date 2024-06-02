const disp = document.getElementById("disp");

function num(val) {
    disp.value +=val;
}
disp.addEventListener("input", () => {
    if (disp.value.length > 20) {
        alert("Number Overloaded. Please do a small calculation");
        disp.value = disp.value.slice(0, 20); // Truncate to 20 digits
    }
});

function res() {
    try {
        disp.value = eval(disp.value);
    } catch (error) {
        console.log(error);
        alert("Enter a valid expression");
        disp.value = "";
    }
}

function clr() {
    disp.value = "";
}

function backspace() {
    disp.value = disp.value.slice(0, -1);
}

disp.addEventListener("keypress", (e) => {
    let cc = e.which ? e.which : e.keyCode;
    let cstr = String.fromCharCode(cc);
    if (!/[0-9\/\-\+\*\=\.]/.test(cstr) && e.code !== "Enter") {
        e.preventDefault();
    }

    if (e.code === "Enter") {
        disp.value=eval(disp.value)
        e.preventDefault();
    }
});

function tgl() {
    const disp = document.getElementById('disp');
    disp.disabled = !disp.disabled;
    if (!disp.disabled) {
        disp.focus();
    } else {
        disp.value = ''; // Clear input when disabled
    }
}

var dt = document.getElementById("dt");
dt.onclick = function(){
    document.body.classList.toggle("dark");
}