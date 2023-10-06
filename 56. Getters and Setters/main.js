// Get = mengikat properti object ke sesuatu intinya
//       biasanya sih string 400(L)

// Set = mengubah object menjadi memiliki properti function
//       ketika properti itu menjadi value (udahlah gausah dihafalin ga penting juga)

class Car {
  constructor(power, gas) {
    this._gas = gas
    this._power = power

    if (this._gas > 50){
      this._gas = 50
    }else if (this._gas < 0){
      this._gas = 0
    }
  }

  get power() {
    return `${this._power}Hp`
  }

  get gas() {
    return `${this._gas}L ${this._gas / 50 * 100}%`
  }

  
}

const carInstance = new Car(400,100);

console.log(`The Car's power is ${carInstance.power} and the car's gas is ${carInstance.gas}`);