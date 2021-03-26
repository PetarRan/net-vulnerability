# EESTECH CHALLENGE - CYBERSECURITY HACKATHON 2021 NIŠ 
_Repozitorijum za oficijalno EESTEC Challenge takmicenje - 2021_

**ZADATAK**

Napraviti web sajt koji ce za bilo koji uneti &quot;Indicator of Compromise&quot; (IOC) automatski izvrsiti proveru sa sto vise razlicitih Threat Intelligence web sajtova (to su TI sharing platofrme ili TI liste) (putem API poziva ili putem direktnog web requesta), i predstaviti korisniku sve rezultate na jednom mestu. IOC mzoe biti IP adresa, domain name, file hash ili maliciozni fajl.

Nacin bodovanja:

**Faza I** – postavka osnovnog web sajta (tehnologija je stvar izbora takmicara; python generalno podrzava fleksibilnost u izradi web sajtova)

  - postavka osnovnog sajta za unosenje IOC 30 poena
  - podrska za unos IP IOC 10 poena
  - podrska za unos domain name IOC 10 poena
  - podrska za unos file hash IOC 10 poena
  - podrska za unos malicioznog fajla 10 poena
  - podrska za modularnim unosom novog Threat Intelligence Source (centralno mesto za listu TI sajtova, sa posebnim modulom za svaki TI sajt) 20 poena
  - podrska za svaki razlicit format dodatnih 10 poena (freetekst, csv, misp, html web response)
  - konzistentnost u izvrsavanju bez obzira na dostupnost Threat Intelligenec sajta 10 poena
  - 20 poena ako su rezultati svih threat intelligence sajtova prikazani na istoj web stranici

**Faza II** – integracija sto vise razlicitih Threat intelligence sajtova putem API calls ili direktnim web zahtevima

- 10 poena za svaki dodatni threat intelligence site kroz web request
- 15 poena za svaki dodatni threat intelligence site kroz API request
- Primeri mogucih Threat Intelligence sajtova:

  - https://exchange.xforce.ibmcloud.com/
  - https://metadefender.opswat.com/
  - https://x.threatbook.cn/
  - https://s.threatbook.cn/
  - https://zeltser.com/lookup-malicious-websites/
  - lista ostalih TI web sajtova: https://zeltser.com/lookup-malicious-websites/

**Faza III** – racunanje risk faktora za uneti IOC – 50 poena

- Za svaki od integrisanih TI sajtova se definise risk score od 1 do 10
- Ukupni risk score se racuna kao suma risk scorova svih TI sajtova koji su prpoznali uneseni IOC kao maliciozni


![pf2-1](https://user-images.githubusercontent.com/70757499/112632741-cfc46700-8e38-11eb-9f63-ef3d83447de5.png)
