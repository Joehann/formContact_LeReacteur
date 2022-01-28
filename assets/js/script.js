document.addEventListener("DOMContentLoaded", () => {
  //   console.log("Le document est chargé");
  const contactForm = document.querySelector("#contactForm");
  contactForm.addEventListener("submit", async (el) => {
    el.preventDefault();
    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    // console.log(data);
    const response = await axios.post(
      "https://contactform-lereacteur-jp.herokuapp.com/send-mail",
      data
    );
  });
});
