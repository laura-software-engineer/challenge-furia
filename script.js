// Alternar entre tema claro e escuro
const toggleThemeButton = document.createElement("button");
toggleThemeButton.id = "toggleTheme";
toggleThemeButton.innerHTML = "🌙";

document.querySelector(".header").appendChild(toggleThemeButton);

// Verificar tema atual
let currentTheme = localStorage.getItem("theme") || "dark";
document.body.setAttribute("data-theme", currentTheme);

// Alterar tema
toggleThemeButton.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);

  // Alterar ícone do botão
  toggleThemeButton.innerHTML = currentTheme === "dark" ? "🌙" : "☀️";
});