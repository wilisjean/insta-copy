let number = Math.floor(Math.random()*3)

console.log(number)

switch (number) {
    case 0:
        document.getElementById("demo").innerHTML = '<img src="imagens/phonec.png" alt="instagram phone"></img>';
        break;

    case 1:
        document.getElementById("demo").innerHTML = '<img src="imagens/phonea.png" alt="instagram phone"></img>';
        break;

    case 2:
        document.getElementById("demo").innerHTML = '<img src="imagens/phoneb.png" alt="instagram phone"></img>';
        break;
    
}