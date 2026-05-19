let balance = 0;

function addTransaction(type) {
  // Hämtar värden från inputfälten och tar bort extra mellanslag
  const desc = document.getElementById('desc').value.trim();
  const amount = document.getElementById('amount').value.trim();

  // Avbryter om något fält är tomt eller om beloppet inte är en siffra
  if (!desc || !amount || isNaN(amount)) return;

  const sum = Number(amount); // Omvandlar en string till ett tal

  // Bestämmer label och list baserat på typen av transaktion 
  const label = type === 'income' ? 'Inkomst' : 'Utgift';
  const listId = type === 'income' ? 'incomeList' : 'expenseList';

  // Skapar en ny listpunkt och lägger till den i rätt lista
  const li = document.createElement('li');
  li.textContent = `${desc} - ${sum} kr (${label})`;
  document.getElementById(listId).appendChild(li);

  // Uppdaterar saldot
  balance += type === 'income' ? sum : -sum;
  document.getElementById('balance').textContent = balance;

  // Rensar inputfälten
  document.getElementById('desc').value = '';
  document.getElementById('amount').value = '';
}

// När knapparna klickas anropas addTransaction-funktionen
document.getElementById('incomeBtn').addEventListener('click', () => addTransaction('income'));
document.getElementById('expenseBtn').addEventListener('click', () => addTransaction('expense'));
