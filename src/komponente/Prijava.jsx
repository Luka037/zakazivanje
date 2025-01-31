import emailjs from "@emailjs/browser";

const Prijava = ({ setUserName, userName, setSifra, eMail, setEMail }) => {
  const handleEMail = (e) => {
    setUserName(e.target.value);
    setEMail(e.target.value);
  };
  const handleSendEmail = (e) => {
    e.preventDefault();

    if (eMail.trim() === "") {
      alert("Unesite validnu email adresu.");
      return;
    }

    const templateParams = {
      to_email: userName,
      message: "Here is the plain text content of your email!", // The plain text content
    };

    emailjs
      .send(
        "service_as454ap", // Your EmailJS service ID
        "template_pxcspnr", // Your EmailJS template ID
        templateParams, // Template parameters
        "WpvKdT2gAOZzWwgOR" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Uspešno poslato!", response.status, response.text);
          alert("Email je uspešno poslat!");
          setSifra("korisnik37");
          setUserName(eMail);
          setEMail("");
        },
        (error) => {
          console.error("Greška pri slanju emaila:", error);
          alert("Došlo je do greške pri slanju emaila.");
        }
      );
  };
  return (
    <div>
      <label className="popUpLabel">E-mail:</label>
      <input
        className="popUpImput"
        onChange={handleEMail}
        value={eMail}
      ></input>
      <br />
      <center>
        <button className="popUpButton" onClick={handleSendEmail}>
          Registracija
        </button>
      </center>
    </div>
  );
};
export default Prijava;
