function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") {
      document.getElementById("tela_resultado").value = "";
    }
    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "."
    ) {
      document.getElementById("tela_resultado").value += valor;
    }
    
    if (valor === "="){
      var valor_campo = eval(document.getElementById("tela_resultado").value) //Eval converte uma string em números calculáveis
      valor_campo = document.getElementById("tela_resultado").value = valor_campo
    }

  } else if (tipo === "valor") {
    document.getElementById("tela_resultado").value += valor;
  }
}
