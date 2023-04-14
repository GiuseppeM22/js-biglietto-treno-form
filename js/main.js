let btn = document.getElementById("done");
btn.addEventListener("click",
    
    function () {
        let passengerName = document.getElementById("passengerName").value;
        console.log("Generazione nome del passeggero:", passengerName);

        let chilometri = document.getElementById("chilometri").value;

        let age = document.getElementById("age").value;

        let prezzoPerKm = 0.21
        let prezzoTotale = chilometri * prezzoPerKm
        let tipoSconto;
        
        if (age  == "minorenne"){
         prezzoTotale = prezzoTotale - ( prezzoTotale * 0.2 )
         tipoSconto = "Sconto Minori"
        }
         else if (age == "over65"){
         prezzoTotale = prezzoTotale - ( prezzoTotale * 0.4 )
         tipoSconto = "Sconto Senior"

         }
         else {
            prezzoTotale = prezzoTotale
            tipoSconto = "Nessuno Sconto"

         }


         prezzoTotale = prezzoTotale.toFixed(2)

         document.getElementById("passenger").innerText = passengerName
         document.getElementById("sale").innerText = tipoSconto
         document.getElementById("price").innerText = prezzoTotale + " € "

         

    })
