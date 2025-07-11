const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/calculate', (req, res) => {
  const { cantidad, precioUnitario, costoAdicional } = req.body;

  if (
    typeof cantidad !== 'number' ||
    typeof precioUnitario !== 'number' ||
    typeof costoAdicional !== 'number'
  ) {
    return res.status(400).json({ error: 'Invalid input types' });
  }

  const costoTotal = (cantidad * precioUnitario) + costoAdicional;
  res.json({ costoTotal: costoTotal.toFixed(2) });
});

app.listen(port, () => {
  console.log(`Simulador de costo app listening at http://localhost:${port}`);
});
