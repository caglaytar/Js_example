var kelime = "JavaScript";
var uzunluk = kelime.length;
var ilkHarf = kelime.charAt(0);
var sonHarf = kelime.charAt(kelime.length - 1);
var tersKelime = kelime.split('').reverse().join('');

console.log(`Favori kelimeniz: "${kelime}"`);
console.log(`- Uzunluğu: ${uzunluk}`);
console.log(`- İlk Harfi: ${ilkHarf}`);
console.log(`- Son Harfi: ${sonHarf}`);
console.log(`- Ters Çevrilmiş: ${tersKelime}`);