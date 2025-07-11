document.getElementById('costForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const cantidad = parseFloat(document.getElementById('cantidad').value);
  const precioUnitario = parseFloat(document.getElementById('precioUnitario').value);
  const costoAdicional = parseFloat(document.getElementById('costoAdicional').value);

  const response = await fetch('/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cantidad, precioUnitario, costoAdicional })
  });

  const data = await response.json();

  const resultadoDiv = document.getElementById('resultado');
  if (response.ok) {
    resultadoDiv.textContent = `El costo total es: $${data.costoTotal}`;
  } else {
    resultadoDiv.textContent = `Error: ${data.error || 'Error desconocido'}`;
  }
});
