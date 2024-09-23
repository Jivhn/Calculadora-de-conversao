function converter() {
    var decimal = Number(idDecimal.value);
    let octal = decimal.toString(8);
    let hexadecimal = decimal.toString(16);
    let binaria = decimal.toString(2);

    console.log(decimal);
    console.log(octal);
    console.log(hexadecimal);
    console.log(binaria);

    document.getElementById("idDecimal").innerHTML = ` ${decimal}`;
    document.getElementById("idOctal").innerHTML = ` ${octal}`;
    document.getElementById("idHexadecimal").innerHTML = ` ${hexadecimal.toUpperCase()}`;
    document.getElementById("idNaoBinario").innerHTML = ` ${binaria}`;
}

function aparecer_bin() {
    const checkbox = document.getElementById("checkbox_binario");
    const elementoAMostrar = document.getElementById("idNaoBinario");
    if (checkbox.checked) {
        elementoAMostrar.style.display = "block";
    } else {
        elementoAMostrar.style.display = "none";
    }
}

function aparecer_hexa() {
    const checkbox = document.getElementById("checkbox_hexa");
    const elementoAMostrar = document.getElementById("idHexadecimal");
    if (checkbox.checked) {
        elementoAMostrar.style.display = "block";
    } else {
        elementoAMostrar.style.display = "none";
    }
}

function aparecer_octal() {
    const checkbox = document.getElementById("checkbox_octal");
    const elementoAMostrar = document.getElementById("idOctal");
    if (checkbox.checked) {
        elementoAMostrar.style.display = "block";
    } else {
        elementoAMostrar.style.display = "none";
    }
}