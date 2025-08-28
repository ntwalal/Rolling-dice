//Dice faces ("⚀","⚁","⚂","⚃","⚄","⚅")
const dices = ["⚀","⚁","⚂","⚃","⚄","⚅"];
function stopstart() {
    const dice = document.getElementById("dice")
    const random = Math.floor(Math.random() * 6);
    dice.textContent = dices[random];  
}
// Show a dice face when the page loads
window.onload = function() {
document.getElementById("dice").textContent = dices[0];
};