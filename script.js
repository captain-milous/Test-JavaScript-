class Auto {
	constructor(rokVyroby, znacka, model, najeto) {
		this.rokVyroby = rokVyroby;
		this.znacka = znacka;
		this.model = model;
		this.najeto = najeto;
	}
	toString() {
    	return `${this.rokVyroby} ${this.znacka} ${this.model}, najeto ${this.najeto} km`;
  	}
}

class Autoservis {
	constructor(nazev) {
		this.nazev = nazev;
		this.seznamAut = [];
	}
	getCarList() {
		let output = "";
		for(let i = 0; i < this.seznamAut.length; i++) {
			output = output + this.seznamAut[i].toString()+` \n`;
		}
		return output;
	}
	addCarToList(Auto) {
		this.seznamAut.push(Auto);
	}
	removeAuto(Auto) {

	}
}

function refreshCars(myServis) {
	let output = ``;
	console.log("start");
	for(let i = 0; i < myServis.length; i++){
		output = `"<div id="`+i+`" class="col"><div class="card shadow-sm"><div class="card-body"><h3 class="fw-bold lh-1">${myServis.seznamAut[i].this.znacka} ${myServis.seznamAut[i].model}</h3><p class="card-text">Rok výroby: ${myServis.seznamAut[i].rokVyroby} \nUjeto ${myServis.seznamAut[i].najeto} km</p></div></div></div>"`;
	}
	console.log(output);
	document.getElementById("myAutoservis").innerHTML = output;
}

let a1 = new Auto(2005, "Škoda", "Fabia", 169897);
let myServis = new Autoservis("Milošův Autoservis");
myServis.addCarToList(a1);

console.log(myServis.getCarList());
refreshCars(myServis);