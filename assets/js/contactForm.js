function SubmitForm(event) {
  event.preventDefault(); // Prevent form submission and page reload

  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("messageForm").value;

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message,
    access_key: "4ab4d6da-358c-47c5-a7ed-58db18660cc4",
  };

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(async (response) => {
      let res = await response.json();
      console.log(res);
      alert(
        `Na Vaš zahtev će biti odgovoreno u najbržem mogućem roku. Hvala na poverenju!`
      );
    })
    .catch((error) => {
      console.log(error);
    });
}
