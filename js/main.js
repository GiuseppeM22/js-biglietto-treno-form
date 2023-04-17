let btn = document.getElementById("done");
let annulla = document.getElementById ("reset")
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

    //evento al click per annullare

    annulla.addEventListener("click", 
        
        function(){
            document.getElementById("passengerName").value = " ";
            document.getElementById("chilometri").value = " ";

            document.getElementById("passenger").innerText = " ";
            document.getElementById("sale").innerText = " ";
            document.getElementById("price").innerText = " ";

        


        })
