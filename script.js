/* script.js */
document.getElementById('love-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from refreshing the page
  
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both names!");
    return;
  }

  // Randomly generate love percentage
  const lovePercentage = Math.floor(Math.random() * 100) + 1;

  const result = document.getElementById('result');
  result.textContent = `${name1} ❤️ ${name2}: ${lovePercentage}% Love Compatibility!`;
});