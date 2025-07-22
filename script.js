
const logs = [
  "Call from: +1 555-0134",
  "SMS sent to: +1 555-0198",
  "GPS ping: 37.7749° N, 122.4194° W",
  "Mic activated for 3 minutes",
  "Image captured at 14:32"
];

const logList = document.getElementById('log-list');
logs.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  logList.appendChild(li);
});

function generatePDF() {
  const text = logs.join('\n');
  const blob = new Blob([text], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "spy_report.pdf";
  link.click();
}
