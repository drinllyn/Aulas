var cont
for(cont=0;cont<10;cont++){
    console.log(cont)
}
var cont1=0
while(cont1<10){
    console.log(cont1)
    cont1++
}
var cont2=0
do{
    console.log(cont2)
    cont2++
} while(cont2<10);

var carros = ['fusca', 'belina', 'fiat 147', 'brasilia', 'gol', 'uno', 'palio', 'corsa', 'celta', 'vectra', 'civic', 'corolla', 'camaro', 'mustang', 'ferrari', 'lamborghini', 'porsche', 'audi', 'bmw', 'mercedes', 'volvo', 'ford', 'chevrolet', 'renault', 'citroen', 'peugeot', 'fiat', 'vw', 'toyota', 'honda', 'nissan', 'hyundai', 'kia', 'mazda', 'suzuki', 'chery', 'jaguar', 'land rover', 'mini', 'smart', 'volvo', 'acura', 'alfa romeo', 'aston martin', 'bentley', 'chrysler', 'dodge', 'ferrari', 'fisker', 'ford', 'gmc', 'hummer', 'infiniti', 'jaguar', 'jeep', 'kia', 'lamborghini', 'land rover', 'lexus', 'lincoln', 'maserati', 'mazda', 'mercedes-benz', 'mini', 'mitsubishi', 'nissan', 'pontiac', 'porsche', 'ram', 'rolls-royce', 'saab', 'scion', 'smart', 'subaru', 'suzuki', 'tesla', 'toyota', 'volkswagen', 'volvo']
for(var i=0;i<carros.length;i++){
    console.log('1'+carros[i])
}
for(var carro in carros){
    console.log('2'+carros[carro])
}

var a = 3
var b = a * 3
var c = 4 * a / b
console.log(a + b * c)