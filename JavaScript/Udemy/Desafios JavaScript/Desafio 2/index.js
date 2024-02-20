var valor = Number(prompt('Qual valor você pode pagar?'));
const valorProduto = 20;

if (valor < 20) {
  document.write(`Você só tem ${valor}. O produto custa $${valorProduto}`);
} else {
  document.write(`Você tem $${valor}, escolha o seu produto! `);
}