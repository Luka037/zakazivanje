import { useEffect, useState } from "react";
import ComboBox from "./ComboBox";
import Lista from "./Lista";

const Zakazivanje = ({
  setComboVrednostt,
  setDatumm,
  setLboo,
  setBrojTelefonaa,
  korisnickoIme,
}) => {
  const [datum, setDatum] = useState("");
  const [comboVrednost, setComboVrednost] = useState("");
  const [lbo, setLbo] = useState("");
  const [brojTelefona, setBrojTelefona] = useState("");
  const [listaPrikaz, setListaPrikaz] = useState(Lista);
  const zauzetTermin = (datum, comboVrednost) => {
    return listaPrikaz.some(
      (item) => item.datum === datum && item.dr === comboVrednost
    );
  };
  const terminUProslosti = (datum) => {
    const trenutniDatum = new Date();
    trenutniDatum.setHours(0, 0, 0, 0); // Resetujemo vreme na 00:00:00

    const uneseniDatum = new Date(datum);
    uneseniDatum.setHours(0, 0, 0, 0); // Resetujemo vreme unesenog datuma

    return uneseniDatum < trenutniDatum;
  };

  const handleOtkazi = (id) => {
    const updatedTermini = listaPrikaz.filter((termin) => termin.id !== id);
    setListaPrikaz(updatedTermini);
  };

  const handlePotvrdi = () => {
    const dodatakListe = {
      id: listaPrikaz.length + 1,
      korisnickoIme: korisnickoIme,
      datum: datum,
      dr: comboVrednost,
    };
    if (terminUProslosti(datum)) {
      alert("Ne možete zakatati termin u prošlosti");
      return;
    }

    if (zauzetTermin(datum, comboVrednost)) {
      alert("Izabrani termin je zauzet");
      return;
    }
    if (
      datum === "" &&
      comboVrednost === "" &&
      lbo === "" &&
      brojTelefona === ""
    ) {
      alert("Svi parametri moraju biti popunjeni!");
      return;
    }
    alert("Uspesno zakazan termin");
    setListaPrikaz([...listaPrikaz, dodatakListe]);
  };

  const handleLbo = (e) => {
    setLbo(e.target.value);
  };
  const handleBrojTelefona = (e) => {
    setBrojTelefona(e.target.value);
  };
  const handleDatum = (e) => {
    setDatum(e.target.value);
  };
  useEffect(() => {
    setComboVrednostt(comboVrednost);
    setDatumm(datum);
    setLboo(lbo);
    setBrojTelefonaa(brojTelefona);
  }, [
    comboVrednost,
    datum,
    setComboVrednostt,
    setDatumm,
    lbo,
    brojTelefona,
    setLboo,
    setBrojTelefonaa,
  ]);

  return (
    <div className="zakazivanjeDiv">
      <label className="zakazivanjeLabel">Doktor:</label>
      <ComboBox vrednost={comboVrednost} setVrednost={setComboVrednost} />
      <br />
      <br />
      <label>LBO:</label>
      <input
        onChange={handleLbo}
        value={lbo}
        style={{
          appearance: "textfield", // Cross-browser support for most browsers
          MozAppearance: "textfield", // Firefox-specific
          WebkitAppearance: "none", // WebKit-based browsers
        }}
        placeholder="Unesite vaš LBO"
      ></input>
      <br />
      <br />
      <label>Broj telefona:</label>
      <input
        onChange={handleBrojTelefona}
        value={brojTelefona}
        style={{
          appearance: "textfield", // Cross-browser support for most browsers
          MozAppearance: "textfield", // Firefox-specific
          WebkitAppearance: "none", // WebKit-based browsers
        }}
        placeholder="Unesite vaš broj telefona"
      ></input>
      <br />
      <br />
      <label className="zakazivanjeLabel">Datum:</label>
      <input onChange={handleDatum} value={datum} type="datetime-local"></input>
      {"  "}
      <center>
        <button
          onClick={handlePotvrdi}
          className="popUpButton"
          style={{ marginTop: "20px", width: "100%" }}
        >
          Potvrdi
        </button>
      </center>
      {listaPrikaz.map((item) => (
        <div style={{ marginTop: "15px" }}>
          {item.dr}
          <br />
          {item.datum}
          {item.korisnickoIme === korisnickoIme ? (
            <>
              {" "}
              <br />
              <button
                onClick={() => handleOtkazi(item.id)}
                className="dugmeOtkazivanje"
              >
                Otkaži
              </button>
            </>
          ) : undefined}
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Zakazivanje;
