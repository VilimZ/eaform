import React, { useState } from 'react';

const ReservationForm = () => {
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [email, setEmail] = useState('');

  const handleReservation = async () => {
    try {
      const response = await fetch('http://easyappointments.local/api/rezervacija', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ime, prezime, email }),
      });

      if (response.ok) {
        console.log('Uspješno rezervirano!');
      } else {
        console.error('Greška prilikom rezervacije.');
      }
    } catch (error) {
      console.error('Greška prilikom slanja zahtjeva:', error);
    }
  };

  return (
    <form>
      <label>Ime:</label>
      <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} />

      <label>Prezime:</label>
      <input type="text" value={prezime} onChange={(e) => setPrezime(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <button type="button" onClick={handleReservation}>
        Rezervišite termin
      </button>
    </form>
  );
};

export default ReservationForm;
