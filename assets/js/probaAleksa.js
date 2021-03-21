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
        //this.pretraziIPINFO(pom);
       { this.renderRoutes();  
        //this.showOnlyOnce();
        this.collectVirusTotal(pom);
       }
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





async function getRoutes() {
  var pom = document.getElementById("ioc-input").value;
  const api_url= "https://ipinfo.io/"+pom+"/json?token=06fd3125a2044e";
  let url = api_url;
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}


async function renderRoutes(){
 
 let routes = await getRoutes();     
  let html = '';
  //routes.forEach(el => {
      let htmlSegment =` <tr>
                            <td>${routes.ip}</td>
                            <td colspan="2">${routes.city}</td>
                            <td colspan="2">${routes.region}</td>
                            <td>${routes.country}</td>
                            <td>${routes.loc}</td>
                            <td colspan="2">${routes.org}</td>
                            <td>${routes.timezone}</td>
                          </tr>`;

      html += htmlSegment;
  //});
  let container = document.querySelector('#table-body');
  container.innerHTML = html;

}


function showOnlyOnce() {
   {
    
          
            
          var x = document.getElementById("search-data");
           if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    }
  ///////////////////////////////

function collectVirusTotal(ipadd){
    
    fetch(`https://www.virustotal.com/api/v3/ip_addresses/${ipadd}`, 
    { headers: { "X-Apikey": "e2df44921149e28226700cb5563b8b272fe71521c88f18d1aeaefc2761f2004b" } }).then(p => {
      p.json().then(data => {
        //var obj=JSON.parse(data);
        console.log(data);
        let html = '';
        var dictionary=data.data.attributes.last_analysis_results;
        Object.keys(dictionary).forEach(function(key) {
          console.log(key, dictionary[key]);
          let htmlSegment=``;
          if(`${ dictionary[key].result}`=="malicious"){
           htmlSegment =` <tr>
                  <td>${key}</td>
                  <td>${ dictionary[key].category}</td>
                   <td>${ dictionary[key].engine_name}</td>
                   <td>${ dictionary[key].method}</td>
                   <td>${ dictionary[key].result}</td>
                   <td style="background-color:red; color:white">0.1</td>
                </tr>`;
          }
          else{
             htmlSegment =` <tr>
                  <td>${key}</td>
                  <td>${ dictionary[key].category}</td>
                   <td>${ dictionary[key].engine_name}</td>
                   <td>${ dictionary[key].method}</td>
                   <td>${ dictionary[key].result}</td>
                   <td>0</td>
                </tr>`;

          }
        
 html += htmlSegment;
      });
          

          let container = document.querySelector('#table-body-ip');
          container.innerHTML = html;

      });
    });

  }