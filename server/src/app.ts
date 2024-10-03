import express from 'express';
import router from './router';

/**
 * Express application.
 */
const app = express();

app.use(express.json());

// Ny rute for root URL ("/") - kan brukes til enkel testing eller velkomstmelding
app.get('/', (req, res) => {
  res.send('Velkommen til serveren! Prøv å poste til /api/v2/run.');
});

// Siden API-et ikke er kompatibelt med v1, øk API-versjon til v2
app.use('/api/v2', router);

// Start serveren
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

export default app;
