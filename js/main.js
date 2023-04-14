let btn = document.getElementById("done");
btn.addEventListener("click",
    
    function () {
        let passengerName = document.getElementById("passengerName").value;
        console.log("Generazione nome del passeggero:", passengerName);
        document.getElementById("passenger").innerText = passengerName

        
    })
