function x() {
  const valor_base = Number(document.getElementById("valor_base").value);
  const valor_transporte = Number(
    document.getElementById("valor_transporte").value
  );
  const valor_alimentacao = Number(
    document.getElementById("valor_alimentacao").value
  );
  document.getElementById("valor_receita").value =
    valor_base + valor_transporte + valor_alimentacao;
  const valor_automovel = Number(
    document.getElementById("valor_automovel").value
  );
  const faltas = Number(document.getElementById("faltas").value);
  document.getElementById("valor_descontos").value = valor_automovel + faltas;
  document.getElementById("valor_total").value =
    valor_base +
    valor_transporte +
    valor_alimentacao -
    (valor_automovel + faltas);
}
