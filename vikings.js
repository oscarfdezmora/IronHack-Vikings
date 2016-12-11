//Generacion de Vikingos

function Viking (name) {
	this.name=name;
	this.stamina=100;
	this.strength=15 + Math.round(10*Math.random());
	this.alive=true
	vikings.push(this);
}

var vikings = []

ragnar = new Viking ("Ragnar")
floki = new Viking ("Loki")
lagertha = new Viking ("Lagertha")
rollo = new Viking ("Rollo")
bjorn = new Viking ("Bjorn")

//Generacion de Sajones

function Saxon (name) {
	this.name=name;
	this.stamina=100;
	this.strength=10 + Math.round(5*Math.random());
	this.alive=true;
	saxons.push(this);
}

function saxonGenerator (number) {
	var saxons = []
	for (var i = number; i > 0; i--) {
		saxons.push(new Saxon("Saxon" + i.toString()))
	}
	return saxons;
}

// Pit de entrenamiento

var TrainingPit = function (fighter1,fighter2) {
	var rounds = 5;

	writeContest(fighter1,fighter2);
	
	storedstamina1 = fighter1.stamina;
	storedstamina2 = fighter2.stamina;

	fightLoop(fighter1,fighter2,rounds);

	if (drawFight(fighter1,fighter2)) {
		console.log ("Draw fight!!")
	} else if (compareStamina (fighter1,fighter2) ){
		console.log (fighter2.name + " wins!")
	} else if (compareStamina (fighter2,fighter1) ){
		console.log (fighter1.name + " wins!")
	};


	fighter1.stamina = storedstamina1;
	fighter2.stamina = storedstamina2;

	console.log(fighter1.name + " and " + fighter2.name + " rest.")
}



function writeContest (fighter1,fighter2) {
	console.log (fighter1.name + " vs " + fighter2.name);
}

function writeAttack (fighter) {
	console.log	(fighter.name + " attacks with " + fighter.strength);
}

function writeStatus (fighter1,fighter2) {
	console.log (fighter1.name + " has " + fighter1.stamina + " stamina left");
	console.log (fighter2.name + " has " + fighter2.stamina + " stamina left");
}

function attack (fighter1, fighter2) {
	writeAttack (fighter1);
	fighter2.stamina = fighter2.stamina - fighter1.strength;

}

function fightLoop (fighter1,fighter2,rounds) {
	var i = 1;
	while ( i <= rounds && continueFight(fighter1,fighter2) ) {
		console.log ("Round " + i)
		attack(fighter1,fighter2);
		attack(fighter2,fighter1);
		writeStatus(fighter1,fighter2);
		i++;
	};
}

function continueFight (fighter1, fighter2) {
	return compareStamina (fighter1,fighter2) && compareStamina (fighter2, fighter1);
}

function drawFight (fighter1, fighter2) {
	return (fighter2.stamina <= fighter1.strength) && (fighter1.stamina <= fighter2.stamina);
}

function compareStamina (agressor, defender) {
	return (defender.stamina > agressor.strength);
}

