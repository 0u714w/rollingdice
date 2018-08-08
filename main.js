let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


function rollDice1() {

    let rollOfDice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("firstnumber").innerHTML = rollOfDice;
    return rollOfDice;
}

function rollDice2() {

    let rollOfDice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("secondnumber").innerHTML = rollOfDice;
    return rollOfDice;

}

function roll(repeat) {
    var repeat = repeat || 1;
    var Total = 0
    for (var i = 0; i < repeat; i++) {
        var x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
        var y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
        Total += x + y;
        document.getElementById("secondnumber").innerHTML = Total
        return Total
    }

}







let thirdroll = 0
for (let i = 0; i < 1000; i++) {
    thirdroll = rollDice1() + rollDice2();
    count[thirdroll] = count[thirdroll] + 1;
    document.getElementById("thirdnumber").innerHTML = count;
}

for (let i = 0; i < 12; i++) {
    let results = document.getElementById('results');
    let box = document.createElement("div");
    document.createElement("div");
    box.style.backgroundColor = "red";
    box.style.width = count[i] + "px";
    box.style.height = "10px";
    box.style.marginTop = "10px";

    results.appendChild(box);
}