

function visTekstKnap() {
fetch("/kortTekst")
.then((response) => response.json())
.then((data) => {
    const kortHolder = document.getElementById("kortHolder");
    kortHolder.innerHTML = "";
          console.log(data);
          const tekstHolder = document.createTextNode(data.tekst);
          kortHolder.appendChild(tekstHolder);
        }
)
.catch((error) => console.error("Error:", error));

    }





