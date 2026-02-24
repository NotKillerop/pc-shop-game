// Updated server.js to fix PC selling bug and ensure money is properly added to gameState

const gameState = { money: 0, ... }; // assuming gameState is defined somewhere in the code

function sellPC(pc) {
    if (pc) {
        gameState.money += pc.price; // add the PC selling price to the money
        console.log(`Sold PC: ${pc.name}, Added money: ${pc.price}`);
    }
    else {
        console.error('No PC to sell!');
    }
}