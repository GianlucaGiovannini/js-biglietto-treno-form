const prezzoKm = 0.21 // prezzo al km

// chiedere il nome all'utente 
function generate() {
    let userName = document.getElementById("nome").value;
    document.getElementById("stamp_nome").innerHTML = userName;

    let kmPercorso = document.getElementById("km_percorso").value;
    document.getElementById("stamp_km").innerHTML = kmPercorso;

    let userEta = document.getElementById("fascia_eta").value;
    document.getElementById("stamp_eta").innerHTML = userEta;
}

//const prezzoTicket = prezzoKm * kmPercorso // prezzo base del biglietto

//const prezzoMinorenni = prezzoTicket * 0.8 // prezzo scontato per minorenni

//const prezzoOver65 = prezzoTicket * 0.6 // prezzo scontato per gli over 65

/* if (userEta < 18) {
    console.log(prezzoMinorenni.toFixed("2"))
} else if (userEta >= 65) {
    console.log(prezzoOver65.toFixed("2"))
} else {
    console.log(prezzoTicket.toFixed("2"))
} */