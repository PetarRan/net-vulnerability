//let key = "aca585867e912f1c58ed1dc0892b7121754c09d5";

// function pretrziIPDB(keyword) {   //domain i ip
//     const key = "b5728fd97cdc6b5ca519bd7aeb066ad48de1475b7df94d5e2d54f2f73484a11742545c259d204cf5";
//     let api = `https://www.abuseipdb.com/check/${keyword}/json?key=${key}&days=30`;
//     fetch(api, { mode: 'no-cors' })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function ({ data }) {
//             console.log(data)
//             aqiValue = data[0].aqi;
//             city = data[0].station.name;
//         })
//         .then(() => {
//             displayAqi();
//         })
// }
function pretrziIPDB(keyword)
 {

const key = "b5728fd97cdc6b5ca519bd7aeb066ad48de1475b7df94d5e2d54f2f73484a11742545c259d204cf5";
 let api = `https://www.abuseipdb.com/check/${keyword}/json?key=${key}&days=1`;
fetch(api, { headers:"*"})
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });
}




function citaj() {
    var pom = document.getElementById("ioc-input").value;
    var cekiran = document.getElementById("drop-down-toggle-button").value;
    if (cekiran == 1 || cekiran == 2 ) {  //za ip4 ip6 i domain 1 2 3 redom
        //this.pretrziIPDB(pom);
        this.pretraziIPINFO(pom);  

}}

function pretraziIPINFO(keyword)
{
    
 let api = `https://ipinfo.io/${keyword}/json?token=06fd3125a2044e`;
fetch(api)
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });}






// function pretrziIPDB(keyword) {   //domain i ip
//     const key = "b5728fd97cdc6b5ca519bd7aeb066ad48de1475b7df94d5e2d54f2f73484a11742545c259d204cf5";
//     let api = `https://www.abuseipdb.com/check/${keyword}/json?key=${key}&days=30`;
//     fetch(api, { mode: 'no-cors' })
//     .then(p => {
//         p.json().then(data => {
//             data.forEach(el => {
//                 console.log(el);
//             });
//         });
//     });
// }



//https://ipinfo.io/5.57.72.112/json?token=06fd3125a2044e