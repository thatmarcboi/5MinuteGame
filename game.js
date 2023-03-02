var points = 0;
var autoClickers = 0;
var autoClickerCost = 10;
var upgradeCost = 50;
var upgradeMultiplier = 1;

function addPoints() {
    points += upgradeMultiplier;
    document.getElementById("points").innerHTML = "Points: " + points;
}

function buyAutoClicker() {
    if (points >= autoClickerCost) {
        autoClickers++;
        points -= autoClickerCost;
        autoClickerCost += 5;
        document.getElementById("points").innerHTML = "Points: " + points;
        document.getElementById("autoClickerCost").innerHTML = autoClickerCost;
        document.getElementById("autoClickers").innerHTML = autoClickers;
        setInterval(function() {
            addPoints();
        }, 1000);
    }
}

function buyUpgrade() {
    if (points >= upgradeCost) {
        upgradeMultiplier++;
        points -= upgradeCost;
        upgradeCost += 25;
        document.getElementById("points").innerHTML = "Points: " + points;
        document.getElementById("upgradeCost").innerHTML = upgradeCost;
        document.getElementById("upgradeMultiplier").innerHTML = upgradeMultiplier;
    }
}
