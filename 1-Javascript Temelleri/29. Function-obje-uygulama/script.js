// Demo : Functions

var bakiye = 2000;
var adsoyad = 'sena turan';

var hesapA = {
    ad : 'Sena Turan',
    hesapNo : '12345678',
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB= {
    ad : 'Emel Turan',
    hesapNo : '12356479',
    bakiye : 3000,
    ekHesap : 2000
}


function paraCek(hesap,miktar){
    console.log("Merhaba "+ hesap.ad);
    //hesap = hesapA; olmuş oldu bak48.satir

    if(hesap.bakiye >= miktar){
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('paranızı alabilirsiniz');
    }
    else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm('ek hesabınızı kullanmak istermisiniz')){
                console.log('paranızı alabilirsiniz');
              hesap.bakiye = 0;
              hesap.ekHesap= toplam-miktar;
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
            }
        }else{
            console.log('üzgünüz bakiye yetersiz');
        }
    }

}

paraCek(hesapA,2000);
//console.log(hesapA.ekHesap);
//paraCek(hesapA,100);

var x = 10;
var y = 5;
 
console.log(x++);
console.log(++x);
console.log(--x);
console.log(x%y);
console.log(x!=y);
console.log(x===y || x>y);
// paraCek(hesapB,2000);

//var dex = confirm("Emin Misiniz ?");

//if(dex)
 //   console.log("ok");
//else console.log("no");

var names = "ibo";
var age = 22;
function dnm(){
    var names = "deniz";
    console.log("berre"+names);
}
console.log(names);

dnm();

if(true)
{
    age = 38;
}

console.log(age);
