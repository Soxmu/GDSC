const readline = require("realine").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function randomChoice() {
    const choices = ["gunting", "batu", "kertas"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

console.clear();

console.log("Permainan Gunting Batu Kertas!");

readline.question("Pilihan pemain: ", (result) => {
    const playerChoice = result;
    const computerChoice = randomChoice();
    
    console.log("Pilihan Pemain: " +playerChoice);
    console.log("Pilihan Komputer: " + computerChoice);
    
    if (playerChoice == "gunting" && computerChoice == "kertas" ) {
        console.log("Pemain menang!");
    } else if (playerChoice == "batu" && computerChoice == "gunting") {
        console.log("Pemain menang!");
    } else if (playerChoice == "kertas" && computerChoice == "batu") {
        console.log("Pemain menang!");
    } else if (playerChoice == computerChoice) {
        console.log("Seimbang");
    } else {
        console.log("Komputer menang!");
    }

    readline.close();
})
