const ComboBox = ({ vrednost, setVrednost }) => {
  const handleComboBox = (e) => {
    setVrednost(e.target.value); // Update the parent state with the selected value
  };

  return (
    <select
      name="usluge"
      value={vrednost}
      onChange={handleComboBox} // Ensure onChange is on the select element
      className="comboBoxKutija"
    >
      <option value="" disabled>
        Izaberite stomatologa
      </option>
      <option value="Dr.Jovan">Dr.Jovan Jovanović</option>
      <option value="Dr.Marija">Dr.Marija Nikolić</option>
      <option value="Dr.Mladen">Dr.Mladen Janjić</option>
      <option value="Dr.Biljana">Dr.Biljana Savić</option>
    </select>
  );
};

export default ComboBox;
