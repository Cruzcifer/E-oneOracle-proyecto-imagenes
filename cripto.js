const entradaTexto =document.querySelector(".entradaTexto")
const salidaTexto = document.querySelector(".mensaje")




function btnEncriptar(){

    const txtcripto= encriptar(entradaTexto.value)
    salidaTexto.value=txtcripto;
    salidaTexto.style.backgroundImage="none";
    entradaTexto.value="";
}

function encriptar(txtEntrada){

        let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        txtEntrada = txtEntrada.toLowerCase();

        for(let i=0; i<matrizCodigo.length;i++){

            if(txtEntrada.includes(matrizCodigo[i][0])){

                txtEntrada=txtEntrada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            }

        }
        return txtEntrada;

}

function btnDesencriptar(){

    const txtdcripto=desencriptar(salidaTexto.value)
     salidaTexto.value=txtdcripto;

}

function desencriptar(txtSalida){

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        txtSalida = txtSalida.toLowerCase();

        for(let i=0; i<matrizCodigo.length;i++){

            if(txtSalida.includes(matrizCodigo[i][1])){

                txtSalida=txtSalida.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }

        }
        return txtSalida;

}
function copiar() {

     salidaTexto.select()
     navigator.clipboard.writeText(salidaTexto.value)
     salidaTexto.value=""
     alert("texto copiado")

}