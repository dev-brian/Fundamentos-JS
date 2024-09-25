const phone = {
    brand: 'Huawei',
    SO: 'Android 10',
    RAM: '4GB',
    ROM: '64GB',
    Screen: '5"',
    Model: 'Y6',
    functional: true,
    damaged: false,

}
console.log(phone);
console.log(phone.brand);
phone.damaged = true;
phone.color = 'black';
phone['case color'] = 'gray';
console.log(phone);
console.log(phone['color']);

phone.star = function(){
    console.log('   HELLO  \n   ' + this.brand + '\n' + ' POWERED BY' + '\n ' + this.SO);
    console.log('Encendiendo...')
    console.log('Listo ;)')
}

phone.call = function(name){
    console.log('Llamando a ' + name);
    console.log('Llamando...')
    console.log('No contesto :/')
}

phone.star();
phone.call('BATMAN');