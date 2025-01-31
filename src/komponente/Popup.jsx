const PopUp = ({ setOpenPopUp, sadrzaj, naslov }) => {
  const handleClose = () => {
    setOpenPopUp(false);
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="popUpPozadina"></div>
      <div className="popUpSadrzaj">
        {" "}
        <div
          style={{
            justifyContent: "right",
            textAlign: "right",
            marginTop: "-40px",
          }}
        >
          <button className="popUpX" onClick={handleClose}>
            X
          </button>
        </div>
        <center>
          <h1 className="popUpNaslov">{naslov}</h1>
        </center>
        <div>{sadrzaj}</div>
      </div>
    </div>
  );
};
export default PopUp;
