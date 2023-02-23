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
		console.log(this.seznamAut.length());
		if(this.seznamAut.length() != 0){
			for(let i = 0; i < this.seznamAut.length; i++) {
				output = output + this.seznamAut[i].toString()+` \n`;
			}
		}
		return output;
	}
	addCarToList(Auto) {
		this.seznamAut.push(Auto);
	}
	removeAuto(Auto) {
		this.seznamAut.remove(Auto);
	}
}

let myCarServis = new Autoservis("Milošův Autoservis");

myCarServis.addCarToList(new Auto(2005, "Škoda", "Fabia", 169899));
myCarServis.addCarToList(new Auto(2004, "Škoda", "Fabia", 206997));
myCarServis.addCarToList(new Auto(2003, "Škoda", "Octavia", 369893));
myCarServis.addCarToList(new Auto(2000, "Škoda", "Felicia", 69097));
myCarServis.addCarToList(new Auto(2010, "Škoda", "Superb", 129428));
myCarServis.addCarToList(new Auto(2004, "Škoda", "Superb", 297828));

localStorage.setItem("myServis", myCarServis);


myCarServis = localStorage.getItem("myServis");



function refreshCars(list) {
	let output = ``;
	let output2 = "";
	for(let i = 0; i < list.length; i++){
		if(list[i] != undefined) {
			output = output  + `<div id="`+ i +`" class="col">
			<div class="card shadow-sm"><div class="card-body">
			<h3 class="fw-bold lh-1">`+ list[i].znacka +` `+ list[i].model+`</h3><br>
			<p class="card-text">Rok výroby: `+list[i].rokVyroby +`</p>
			<p class="card-text">Ujeto `+ list[i].najeto +`km</p><br>
			<input id="car`+ i +`" type="button" onclick="removeCar(`+ i +`)" value="Odeber vozidlo">
			</div></div></div>`;
			output2 = output2 + list[i].toString()+ ";\n";
		}
	}
	document.getElementById("myAutoservis").innerHTML = output;
	document.getElementById("seznam").innerHTML = output2;
	localStorage.removeItem("myServis");
	localStorage.setItem("myServis", myCarServis);
}

function addCar() {
	let znacka = document.getElementById("znacka").value;
	let model = document.getElementById("model").value;
	let rokVyroby = document.getElementById("rVyroby").value;
	let najeto = document.getElementById("najeto").value;
	let noveAuto = "";
	if(znacka != "" && model != "") {
		console.log("auto je ok");
		noveAuto = new Auto(rokVyroby, znacka, model, najeto);
		myCarServis.addCarToList(noveAuto);
		refreshCars(myCarServis.seznamAut);
		document.getElementById("znacka").value = "";
		document.getElementById("model").value = "";
	} else {
		console.log("Auto nemá vyplněné parametry.");
	}
}

function removeCar(index) {
	console.log(myCarServis.seznamAut[index]);
	delete myCarServis.seznamAut[index];
	console.log(myCarServis);
	refreshCars(myCarServis.seznamAut);
}

//console.log(myCarServis.getCarList());
refreshCars(myCarServis.seznamAut);