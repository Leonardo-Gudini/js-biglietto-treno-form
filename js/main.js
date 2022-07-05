const genera = document.getElementById("genera");

genera.addEventListener("click",

    function(){
        


        const nomeCognome = document.getElementById("nomeCognome").value;
        const nomePasseggero = document.getElementById('nomePasseggero');
        nomePasseggero.innerHTML = nomeCognome;

        const chilometri = parseInt(document.getElementById("chilometri").value);

        const fasciaEta = document.getElementById("fasciaEta").value;

        const prezzoBiglietto = parseInt(0.21 * chilometri);
        const prezzo = document.getElementById("prezzo");

        const tipologiaBiglietto = document.getElementById("tipologiaBiglietto");

        const carrozza = document.getElementById("carrozza");
        carrozza.innerHTML = Math.floor(Math.random() * 10) + 1;

        const prenotazione = document.getElementById("prenotazione");
        prenotazione.innerHTML = Math.floor(Math.random() * 90000) + 9999;

         if(fasciaEta == "minorenne"){
            const sconto20 = prezzoBiglietto / 100 * 20;
            tipologiaBiglietto.innerHTML = "Sconto Young"
            prezzo.innerHTML = (prezzoBiglietto - sconto20).toFixed(2);

        } else if (fasciaEta == "over65") {
            const sconto40 = prezzoBiglietto / 100 * 40;
            tipologiaBiglietto.innerHTML = "Sconto Silver"
            prezzo.innerHTML = (prezzoBiglietto - sconto40).toFixed(2);
            
        } else {
            prezzo.innerHTML = prezzoBiglietto.toFixed(2);
            tipologiaBiglietto.innerHTML = "Standard"
        }
    }
);

