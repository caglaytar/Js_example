var isim = "ali veli can yılmaz";
var isimler = isim.split(' ');
var duzenlenmisIsim = isimler.map(function(kelime) {
    return kelime.charAt(0).toUpperCase() + kelime.slice(1).toLowerCase();
}).join(' ');

console.log("Girilen İsim: " + isim);
console.log("Düzenlenmiş İsim: " + duzenlenmisIsim);