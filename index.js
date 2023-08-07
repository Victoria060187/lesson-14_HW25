const table = document.getElementById("multiplication-table");

for (let i = 0; i < 11; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < 11; j++) {
    const cell = document.createElement(i === 0 || j === 0 ? "th" : "td");

    if (i === 0 && j === 0) {
      cell.textContent = "";
    } else if (i === 0) {
      cell.textContent = j;
    } else if (j === 0) {
      cell.textContent = i;
    } else {
      cell.textContent = i * j;
    }

    row.appendChild(cell);
  }

  table.appendChild(row);
}