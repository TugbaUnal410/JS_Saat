// Kullanıcıdan isim alma
let userName = prompt("Lütfen adinizi giriniz:");

// İsmi ekrana yazdırma
document.getElementById("myName").innerHTML = userName;

function nowDate() {
    let now=new Date();

    let hour=now.getHours();
    let minutes=now.getMinutes();
    let second=now.getSeconds();
    let day=now.getDay();

    let days=["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"];

    if (hour<10){
        hour= "0"+hour;
    }
    
    if(minutes<10){
        minutes= "0"+minutes;
    }

    if(second<10){
        second= "0"+ second;
    }
  let bilgi = hour + ":" + minutes + ":" + second + " " + days[day];

    document.getElementById("myClock").innerHTML = bilgi;
}
// 1 saniyede bir çalıştır
setInterval(nowDate, 1000);

// Sayfa açılınca hemen çalışsın
showTime();
