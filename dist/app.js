"use strict";
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        if (Number(soma.value)) {
            somarAoSaldo(Number(soma.value));
        }
        else {
            if (String(soma.value)) {
                alert("O Campo só aceita numeros!!");
            }
            else {
                alert("Digite algum valor!");
            }
        }
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
//# sourceMappingURL=app.js.map