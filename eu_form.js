

const ReservationForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAccept = () => {
    // Ovdje možete postaviti logiku za obradu rezervacije
    console.log('FirstName:', firstName);
    console.log('LastName:', lastName);
    console.log('Date:', date);

    // Zatvorite modal
    closeModal();
  };

  // Dodajte event listener za otvaranje modala
  const reservationLink = document.getElementById('reservation-form');
  if (reservationLink) {
    reservationLink.addEventListener('click', openModal);
  }

  return (
    <div>
      {/* Dodajte ID na link koji će otvoriti formu */}
      <a id="eu-form" href="#">Otvori Formu</a>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Rezervacija"
      >
        <h2>Rezervacija</h2>
        <form>
          <label>
            FirstName:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </label>

          <label>
            LastName:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </label>

          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>

          <button type="button" onClick={handleAccept}>
            Accept
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ReservationForm;
