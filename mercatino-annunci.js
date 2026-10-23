// Annunci del mercatino. Aggiorna solo questo file per pubblicare, modificare o togliere annunci.
// Formato di ogni annuncio (esempio, da copiare dentro le parentesi quadre e separare con la virgola):
// {"id":"M-001","prodotto":"Nome prodotto","marca":"Marca","categoria":"Basi latte","quantita":"10","unita":"kg",
//  "scadenza":"2027-03-31","paese":"Italia","regione":"Puglia","tipo":"azienda","prezzo":"","scambio":false,"note":""}
// La categoria e il paese devono avere lo stesso nome usato nei filtri della pagina (italiano su gelateriaingredienti, tedesco su eisdieleinfo).
// Gli annunci con scadenza a meno di 30 giorni, o già scaduta, spariscono da soli dalla griglia.
window.MERCATINO_ANNUNCI = [
  {"id": "BEISPIEL-1", "esempio": true, "prodotto": "Base Frutta - Frutta", "marca": "MEC3", "categoria": "Fruchtbasen", "quantita": "1", "unita": "Beutel à 2 kg", "scadenza": "2027-07-31", "prezzo": "", "scambio": false, "note": "Beispielanzeige, um zu zeigen, wie die Börse funktioniert: Das Produkt steht nicht zum Verkauf.", "foto": "esempio-mec3-base-frutta.jpg"},
  {"id": "BEISPIEL-2", "esempio": true, "prodotto": "DPO Super 100 F Classic", "marca": "Aromitalia", "categoria": "Milchbasen", "quantita": "1", "unita": "Beutel", "scadenza": "2027-07-31", "prezzo": "", "scambio": false, "note": "Beispielanzeige, um zu zeigen, wie die Börse funktioniert: Das Produkt steht nicht zum Verkauf.", "foto": "esempio-aromitalia-dpo-super-100f.jpg"}
];
