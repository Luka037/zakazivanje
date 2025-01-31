import logo from "./logo.svg";
import stilovi from "./komponente/stilovi.css";
import { useEffect, useState } from "react";
import Gornjideo from "./komponente/Gornjideo";
import PrijavaDugme from "./komponente/PrijavaDugme";
import PopUp from "./komponente/Popup";
import Login from "./komponente/Login";
import Prijava from "./komponente/Prijava";
import Zakazivanje from "./komponente/Zakazivanje";

function App() {
  const [korisnickoIme, setKorisnickoIme] = useState("");
  const [prijava, setPrijava] = useState(false);
  const [login, setLogin] = useState(false);
  const [eMail, setEMail] = useState("");
  const [sifra, setSifra] = useState("");
  const [openPopUp, setOpenPopUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [datum, setDatum] = useState("");
  const [lbo, setLbo] = useState("");
  const [brojTelefona, setBrojTelefona] = useState("");
  const [doktor, setDoktor] = useState("");
  const [comboBox, setComboBox] = useState("");
  useEffect(() => {
    console.log("Ovako izgleda format datuma", datum);
    console.log("Ovako izgleda format combo", comboBox);
  }, [datum, comboBox]);

  return (
    <div>
      {openPopUp === true ? (
        <PopUp
          setOpenPopUp={setOpenPopUp}
          naslov={
            prijava === true && login === false ? "Registracija" : "Prijava"
          }
          sadrzaj={
            prijava === true && login === false ? (
              <Prijava
                userName={userName}
                setUserName={setUserName}
                eMail={eMail}
                setSifra={setSifra}
                setEMail={setEMail}
              />
            ) : (
              <Login
                setKorisnickoIme={setKorisnickoIme}
                setOpenPopUp={setOpenPopUp}
                eMail={eMail}
                setEMail={setEMail}
                sifra={sifra}
                userName={userName}
              />
            )
          }
        />
      ) : undefined}

      <div>
        <PrijavaDugme
          setPrijava={setPrijava}
          setLogin={setLogin}
          setOpenPopUp={setOpenPopUp}
          setKorisnickoIme={setKorisnickoIme}
          korisnickoIme={korisnickoIme}
        />
        <Gornjideo
          zakazivanje={
            korisnickoIme === "" ? (
              "Morate biti prijavljeni da bi ste zakazali termin"
            ) : (
              <Zakazivanje
                setComboVrednostt={setComboBox}
                setDatumm={setDatum}
                setLboo={setLbo}
                setBrojTelefonaa={setBrojTelefona}
                korisnickoIme={korisnickoIme}
              />
            )
          }
        />
      </div>
    </div>
  );
}

export default App;
