// chiedere il nome all'utente 
function generate() {

    // nome
    let userName = document.getElementById("nome").value;
    document.getElementById("stamp_nome").innerHTML = userName;
    // km percorsi
    let kmPercorso = document.getElementById("km_percorso").value;

    // età
    let userEta = document.getElementById("fascia_eta").value;

    // prezzo al km
    const prezzoKm = 0.21
    const prezzoUtente = prezzoKm * kmPercorso;
    const prezzoMinori = prezzoUtente * 0.8;
    const prezzoOver_65 = prezzoUtente * 0.6;

    // stampa 
    if (userEta === "minorenne") {
        document.getElementById("tipo_offerta").innerHTML = "Sconto Minorenne";
        document.getElementById("price_ticket").innerHTML = "€ " + prezzoMinori.toFixed(2)
    } else if (userEta === "over 65") {
        document.getElementById("tipo_offerta").innerHTML = "Sconto Over 65";
        document.getElementById("price_ticket").innerHTML = "€ " + prezzoOver_65.toFixed(2)
    } else {
        document.getElementById("tipo_offerta").innerHTML = "Nessuna offerta";
        document.getElementById("price_ticket").innerHTML = "€ " + prezzoUtente.toFixed(2)
    }

    // carrozza 
    const carrozza = Math.floor(Math.random() * 11);
    document.getElementById("n_carrozza").innerHTML = carrozza;

    // codice cp 
    const codiceCP = Math.floor(Math.random() * 100000);
    document.getElementById("n_cp").innerHTML = codiceCP;
}

function remove() {
    document.getElementById("stamp_nome").innerHTML = "";
    document.getElementById("tipo_offerta").innerHTML = "";
    document.getElementById("n_carrozza").innerHTML = "";
    document.getElementById("n_cp").innerHTML = "";
    document.getElementById("price_ticket").innerHTML = "";
}