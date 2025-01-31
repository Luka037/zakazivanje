import { useState } from "react";

const Login = ({
  setOpenPopUp,
  userName,
  sifra,
  setKorisnickoIme,
  eMail,
  setEMail,
}) => {
  const [password, setPassword] = useState("");
  const handleSifra = (e) => {
    setPassword(e.target.value);
  };
  const handleEMail = (e) => {
    setEMail(e.target.value);
  };
  const handlePrijava = () => {
    if (userName !== eMail) {
      alert("Korisnicko ime nije tacno!");
      setEMail("");
      return;
    }
    if (sifra !== password) {
      alert("Šifra nije tačna!");
      setPassword("");
      return;
    }
    if (userName === eMail && sifra == password) {
      alert("Uspešna prijava!");
      setKorisnickoIme(userName);
      setOpenPopUp(false);
      setEMail("");
      setPassword("");
    }
  };
  return (
    <div>
      <label className="popUpLabel">E-mail:</label>
      <input
        value={eMail}
        onChange={handleEMail}
        className="popUpImput"
      ></input>
      <br />
      <div style={{ marginTop: "10px" }}>
        <label className="popUpLabel">Šifra:</label>
        <input
          value={password}
          onChange={handleSifra}
          style={{ marginLeft: "21px" }}
          className="popUpImput"
        ></input>
      </div>
      <center>
        <button className="popUpButton" onClick={handlePrijava}>
          Prijavi se
        </button>
      </center>
    </div>
  );
};
export default Login;
