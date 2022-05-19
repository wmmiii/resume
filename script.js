// What else should I name this?

function generatedString() {
  const date = new Date();
  const month = String(date.getUTCMonth()).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const dateString = `${date.getUTCFullYear()}-${month}-${day}`;

  return `Generated on ${dateString} UTC`;
}

const genEl = document.getElementById('generated-date');
if (genEl) {
  genEl.innerText = generatedString();
}
