const PrijavaDugme = ({
  setOpenPopUp,
  setPrijava,
  setLogin,
  korisnickoIme,
  setKorisnickoIme,
}) => {
  const handlePrijava = () => {
    setPrijava(true);
    setLogin(false);
    setOpenPopUp(true);
  };

  const handleLogin = () => {
    setLogin(true);
    setPrijava(false);
    setOpenPopUp(true);
  };

  const handleOdjava = () => {
    setKorisnickoIme("");
  };
  return (
    <div className="dropdown">
      <button className="dropbtn">
        {korisnickoIme === "" ? "Prijava" : korisnickoIme}
      </button>
      <div className="dropdown-content">
        {korisnickoIme === "" ? (
          <>
            {" "}
            <a onClick={handlePrijava} href="#">
              Registracija
            </a>
            <a onClick={handleLogin} href="#">
              Prijava
            </a>
          </>
        ) : (
          <a onClick={handleOdjava} href="#">
            Odjava
          </a>
        )}
      </div>
    </div>
  );
};
export default PrijavaDugme;
