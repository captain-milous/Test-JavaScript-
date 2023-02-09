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