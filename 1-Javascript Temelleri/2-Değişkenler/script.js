// Değişkenler

var age;
console.log(age) // undefined

age = 20;
console.log(age) // 20

var fullname = 'Sadık Turan';
console.log(fullname) // Sadık Turan

let name;
name="ibrahim";
console.log(name); // ibrahim

name="Umut";
console.log(name); //umut 

const isim = "umut ibrahim";
console.log(isim); //umut ibrahim

isim = "manyak";
console.log(isim); // hata

/*
 Değişken Tanımlama Kuralları
 ** Değişken isimleri rakam ile başlayamaz.
    var 1yas; => hatalı
    var yas1; => geçerli
    var _yas; => geçerli
    
 ** Komut isimleriyle tanımlama yapılamaz. Örneğin if kelimesi dğeişken ismi olamaz.
 ** Büyük küçük harf duyarlılığı vardır.

    var firstName = 'Sadık';
    var FirstName = 'Çınar';
    
    Farklı değişken isimleridir.
 ** Değişken isimlerinde türkçe karakter kullanmamalıyız.   
*/

// var(içine herhangi bir tanımlama yapabiliriz), let(var ile aynı işlevi görmektedir), const(eğer tanımladığımız değişkenimizin alt satırlarda bir daha değer almasını istemiyorsak kullanırız.)