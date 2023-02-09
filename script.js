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

function refreshCars(list) {
	let output = ``;
	console.log("start "+ list.length);
	for(let i = 0; i < list.length; i++){
		console.log(list[i].toString());
		output = output  + `<div id="`+ i +`" class="col"><div class="card shadow-sm"><div class="card-body"><h3 class="fw-bold lh-1">`+ list[i].znacka +` `+ list[i].model+`</h3><br><p class="card-text">Rok výroby: `+list[i].rokVyroby +`<p><p class="card-text">Ujeto `+ list[i].najeto +`km</p></div></div></div>`;
	}
	console.log(output);
	document.getElementById("myAutoservis").innerHTML = output;
}

let myCarServis = new Autoservis("Milošův Autoservis");
myCarServis.addCarToList(new Auto(2005, "Škoda", "Fabia", 169899));
myCarServis.addCarToList(new Auto(2004, "Škoda", "Fabia", 206997));
myCarServis.addCarToList(new Auto(2003, "Škoda", "Octavia", 369893));
myCarServis.addCarToList(new Auto(2000, "Škoda", "Felicia", 69097));
myCarServis.addCarToList(new Auto(2010, "Škoda", "Superb", 129428));


console.log(myCarServis.getCarList());
refreshCars(myCarServis.seznamAut);