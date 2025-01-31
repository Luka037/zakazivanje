import { useEffect, useState } from "react";

const Gornjideo = ({ zakazivanje }) => {
  const [sadrzaj, setSadrzaj] = useState(
    <div className="hero" id="pocetna">
      <h1>Dobrodošli u OrthoDent</h1>
    </div>
  );
  const [aktivnoDugme, setAktivnoDugme] = useState(undefined);
  const handleONama = () => {
    setSadrzaj(
      <section className="about" id="o-nama">
        <h2>O nama</h2>
        <p>
          OrthoDent je moderna stomatološka ordinacija posvećena vašem osmehu.
          Naš tim stručnjaka koristi najnovije tehnologije i tehnike kako bi vam
          pružio vrhunsku uslugu.Naš cilj je da pacijentima pružimo sigurnost,
          kvalitet i bezbolne stomatološke tretmane. Posvećeni smo individualnom
          pristupu svakom pacijentu i stvaranju prijatnog ambijenta u kojem će
          se osećati opušteno i sigurno. Bilo da vam je potrebna ortodoncija,
          implantologija ili estetska stomatologija, naš tim je ovde da vam
          pomogne u očuvanju i poboljšanju vašeg osmeha.
        </p>
      </section>
    );
    setAktivnoDugme(1);
  };
  const handleUsluge = () => {
    setSadrzaj(
      <section className="services" id="usluge">
        <h2>Usluge</h2>
        <ul>
          <li>Ortodoncija</li>
          <li>Implantologija</li>
          <li>Estetska stomatologija</li>
          <li>Preventivna stomatologija</li>
        </ul>
      </section>
    );
    setAktivnoDugme(2);
  };
  const handleKontakt = () => {
    setSadrzaj(
      <section className="contact" id="kontakt">
        <h2>Kontakt</h2>
        <p>Email: pesteracluka01@gmail.com</p>
        <p>Telefon: +381 062 842 3854</p>
        <p>Adresa: Nemanjina 1, Kruševac</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.581744330812!2d21.325647999165028!3d43.58221560002342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475687e5c7cdd8c9%3A0xc8ead83f7ee92b8b!2sNemanjina%201%2C%20Kru%C5%A1evac!5e0!3m2!1sen!2srs!4v1738327474861!5m2!1sen!2srs"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    );
    setAktivnoDugme(3);
  };
  const handleZakazivanje = () => {
    setSadrzaj(
      <section className="about" id="o-nama">
        <h2>Zakazivanje</h2>
        {zakazivanje}
      </section>
    );
    setAktivnoDugme(4);
  };
  return (
    <div>
      <header>
        <h1>OrthoDent - Stomatološka Ordinacija</h1>
      </header>
      <nav>
        <a
          className={aktivnoDugme === 1 ? "aktivnoDugme" : undefined}
          onClick={handleONama}
        >
          O nama
        </a>
        <a
          className={aktivnoDugme === 2 ? "aktivnoDugme" : undefined}
          onClick={handleUsluge}
        >
          Usluge
        </a>
        <a
          className={aktivnoDugme === 3 ? "aktivnoDugme" : undefined}
          onClick={handleKontakt}
        >
          Kontakt
        </a>
        <a
          className={aktivnoDugme === 4 ? "aktivnoDugme" : undefined}
          onClick={handleZakazivanje}
        >
          Zakazivanje
        </a>
      </nav>
      <div>{sadrzaj}</div>
    </div>
  );
};
export default Gornjideo;
