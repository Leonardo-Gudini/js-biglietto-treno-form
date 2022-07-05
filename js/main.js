const genera = document.getElementById("genera");

genera.addEventListener("click",

    function(){
        const nomeCognome = document.getElementById("nomeCognome")
        alert("il tuo nome è: " + nomeCognome.value)

        const chilometri = document.getElementById("chilometri")
        alert("devi percorrere: " + chilometri.value + " Km")

        const fasciaEta = document.getElementById("fasciaEta")
        alert("La tua fascia d'età è: " + fasciaEta.value)

        const prezzoBiglietto = parseInt(0.21 * chilometri.value);


        if(fasciaEta.value == "minorenne"){

            const sconto20 = prezzoBiglietto / 100 * 20;

            alert("Il prezzo del tuo biglietto è " + (prezzoBiglietto - sconto20) .toFixed(2));

        } else if (fasciaEta.value == "over65") {

            const sconto40 = prezzoBiglietto / 100 * 40;
            alert("Il prezzo del tuo biglietto è " + (prezzoBiglietto - sconto40) .toFixed(2));
            
        } else {

            alert("Il prezzo del tuo biglietto è " + prezzoBiglietto);
        }
    }
);

