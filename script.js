function converter() {
    var decimal = Number(demo1.value);
    let octal = decimal.toString(8);
    let hexadecimal = decimal.toString(16);
    let binaria = decimal.toString(2);

    console.log(decimal);
    console.log(octal);
    console.log(hexadecimal);
    console.log(binaria);

    document.getElementById("demo1").innerHTML = ` ${decimal}`;
    document.getElementById("demo2").innerHTML = ` ${octal}`;
    document.getElementById("demo3").innerHTML = ` ${hexadecimal.toUpperCase()}`;
    document.getElementById("demo4").innerHTML = ` ${binaria}`;
}

function aparecer_bin() {
    const checkbox = document.getElementById("checkbox_demo4");
    const elementoAMostrar = document.getElementById("demo4");
    if (checkbox.checked) {
        elementoAMostrar.style.display = "block";
    } else {
        elementoAMostrar.style.display = "none";
    }
}

function aparecer_hexa() {
    const checkbox = document.getElementById("checkbox_demo3");
    const elementoAMostrar = document.getElementById("demo3");
    if (checkbox.checked) {
        elementoAMostrar.style.display = "block";
    } else {
        elementoAMostrar.style.display = "none";
    }

    
}

function aparecer_octal() {
    const checkbox = document.getElementById("checkbox_demo2");
    const elementoAMostrar = document.getElementById("demo2");
    if (checkbox.checked) {
        elementoAMostrar.style.display = "block";
    } else {
        elementoAMostrar.style.display = "none";
    }
}