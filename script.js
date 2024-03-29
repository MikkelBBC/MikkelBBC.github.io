function openForm() {
    document.getElementById("contact-form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("contact-form").style.display = "none";
  }
  
  // Validering af formular (eksempel)
  const form = document.getElementById("contact-form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const name = form.querySelector("[name='name']").value;
    const email = form.querySelector("[name='email']").value;
    const message = form.querySelector("[name='message']").value;
  
    // Valideringslogik
  
    if (name === "" || email === "" || message === "") {
      alert("Alle felter skal udfyldes!");
      return;
    }
  
    // Send data til server (eksempel)
  
    const data = {
      name,
      email,
      message,
    };
  
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Besked sendt!");
          form.reset();
        } else {
          alert("Der skete en fejl. Prøv igen senere.");
        }
      })
      .catch((error) => {
        alert("Der skete en fejl. Prøv igen senere.");
      });
  });
  