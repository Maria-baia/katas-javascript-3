const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata1";
    conteudo.appendChild(newElement)
    const array = []
    for(i=1; i<=25; i++) {
        array.push(i)
        if(i!=25){
            const newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);
        }else{
            const newText = document.createTextNode(i + ".");
            newElement.appendChild(newText);
        }
    }
    return array.join(", ")
}

function kata2() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata2";
    conteudo.appendChild(newElement)
    const array = []
    for(i=25; i>0; i--) {
        array.push(i)
        if(i!=1){
            const newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);
        }else{
            const newText = document.createTextNode(i + ".");
            newElement.appendChild(newText);
        }
    }
    return array.join(", ")
}

function kata3() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata3";
    conteudo.appendChild(newElement)
    const array = []
    for(i=-1; i>-26; i--) {
        array.push(i)
        if(i!=-25){
            const newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);
        }else{
            const newText = document.createTextNode(i + ".");
            newElement.appendChild(newText);
        }
    }
    return array.join(", ")
}

function kata4() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata4";
    conteudo.appendChild(newElement)
    const array = []
    for(i=-25; i<0; i++) {
        array.push(i)
        if(i!=-1){
            const newText = document.createTextNode(i + ", ");
            newElement.appendChild(newText);
        }else{
            const newText = document.createTextNode(i + ".");
            newElement.appendChild(newText);
        }
    }
    return array.join(", ")
}

function kata5() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata5";
    conteudo.appendChild(newElement)
    const array = []
    for(i=25; i>-26; i--) {
        if(i%5===0){
            array.push(i)
            if(i!=-25){
                const newText = document.createTextNode(i + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(i + ".");
                newElement.appendChild(newText);
            }
        }
    }
    return array.join(", ")
}

function kata6() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata6";
    conteudo.appendChild(newElement)
    const array = []
    for(i=1; i<=100; i++) {
        if(i%3===0){
            array.push(i)
            if(i!=99){
                const newText = document.createTextNode(i + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(i + ".");
                newElement.appendChild(newText);
            }
        }
    }
    return array.join(", ")
}

function kata7() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata7";
    conteudo.appendChild(newElement)
    const array = []
    for(i=1; i<=100; i++) {
        if(i%7===0){
            array.push(i)
            if(i!=98){
                const newText = document.createTextNode(i + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(i + ".");
                newElement.appendChild(newText);
            }
        }
    }
    return array.join(", ")
}

function kata8() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata8";
    conteudo.appendChild(newElement)
    const array = []
    for(i=100; i>0; i--) {
        if(i%7===0 || i%3===0){
            array.push(i)
            if(i!=3){
                const newText = document.createTextNode(i + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(i + ".");
                newElement.appendChild(newText);
            }
        }
    }
    return array.join(", ")
}

function kata9() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata9";
    conteudo.appendChild(newElement)
    const array = []
    for(i=1; i<100; i++) {
        if(i%5===0){
            array.push(i)
            if(i!=95){
                const newText = document.createTextNode(i + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(i + ".");
                newElement.appendChild(newText);
            }
        }
    }
    return array.join(", ")
}

function kata10() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata10";
    conteudo.appendChild(newElement)
    for(i=0; i<20; i++) {
            if(i!=19){
                const newText = document.createTextNode(sampleArray[i] + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(sampleArray[i] + ".");
                newElement.appendChild(newText);
            }
    }
    return sampleArray.join(", ")
}

function kata11() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata11";
    conteudo.appendChild(newElement)
    const array = []
    for(i=0; i<20; i++) {
        if(sampleArray[i]%2===0){
            array.push(sampleArray[i])
            if(i!=19){
                const newText = document.createTextNode(sampleArray[i] + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(sampleArray[i] + ".");
                newElement.appendChild(newText);
            }
        }
    }
    return array.join(", ")
}

function kata12() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata12";
    conteudo.appendChild(newElement)
    const array = []
    for(i=0; i<20; i++) {
        if(sampleArray[i]%2!=0){
            array.push(sampleArray[i])
            if(i!=19){
                const newText = document.createTextNode(sampleArray[i] + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(sampleArray[i] + ".");
                newElement.appendChild(newText);
            }
        }
    }
    return array.join(", ")
}

function kata13() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata13";
    conteudo.appendChild(newElement)
    const array = []
    for(i=0; i<20; i++) {
        if(sampleArray[i]%8===0){
            array.push(sampleArray[i])
            if(i!=19){
                const newText = document.createTextNode(sampleArray[i] + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(sampleArray[i] + ".");
                newElement.appendChild(newText);
            }
        }
    }
    return array.join(", ")
}

function kata14() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata14";
    conteudo.appendChild(newElement)
    const array = []
    for(i=0; i<20; i++) {
            array.push(sampleArray[i] * sampleArray[i])
            if(i!=19){
                const newText = document.createTextNode(sampleArray[i] * sampleArray[i] + ", ");
                newElement.appendChild(newText);
            }else{
                const newText = document.createTextNode(sampleArray[i] * sampleArray[i] + ".");
                newElement.appendChild(newText);
            }
    }
    return array.join(", ")
}

function kata15() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata15";
    conteudo.appendChild(newElement)
    let soma = 0
    for(i=1; i<=20; i++) {
        soma+=i
    }
    const newText = document.createTextNode(soma);
    newElement.appendChild(newText);
    return soma
}

function kata16() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata16";
    conteudo.appendChild(newElement)
    let soma = 0
    for(i=0; i<20; i++) {
        soma+=sampleArray[i]
    }
    const newText = document.createTextNode(soma);
    newElement.appendChild(newText);
    return soma
}

function kata17() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata17";
    conteudo.appendChild(newElement)
    let menor = 9096
    for(i=0; i<20; i++) {
        if(sampleArray[i]<menor){
            menor = sampleArray[i]
        }
    }
    const newText = document.createTextNode(menor);
    newElement.appendChild(newText);
    return menor
}

function kata18() {
    const conteudo = document.getElementById("conteudo")
    const newElement = document.createElement("div");
    newElement.className = "kata18";
    conteudo.appendChild(newElement)
    let maior = 0
    for(i=0; i<20; i++) {
        if(sampleArray[i]>maior){
            maior = sampleArray[i]
        }
    }
    const newText = document.createTextNode(maior);
    newElement.appendChild(newText);
    return maior
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    for(i=0; i<20; i++){
        const conteudo = document.getElementById("conteudo")
        const retangulos = document.createElement("div")
        conteudo.appendChild(retangulos)
        retangulos.style.backgroundColor = "grey"
        retangulos.style.height = "20px"
        retangulos.style.width = "100px"
        const space = document.createElement("br")
        conteudo.appendChild(space)
    }
}

function kataBonus2() {
    let i=0
    let j=105
    while(i<20 && j<=200){
        const conteudo = document.getElementById("conteudo")
        const retangulos = document.createElement("div")
        conteudo.appendChild(retangulos)
        retangulos.style.backgroundColor = "grey"
        retangulos.style.height = "20px"
        retangulos.style.width = j + "px"
        const space = document.createElement("br")
        conteudo.appendChild(space)
        i++
        j+=5
    }
}

function kataBonus3() {
    let i=0
    while(i<20){
        const conteudo = document.getElementById("conteudo")
        const retangulos = document.createElement("div")
        conteudo.appendChild(retangulos)
        retangulos.style.backgroundColor = "grey"
        retangulos.style.height = "20px"
        let j=sampleArray[i]
        retangulos.style.width = j + "px"
        const space = document.createElement("br")
        conteudo.appendChild(space)
        i++
    }
}

function kataBonus4() {
    let i=0
    while(i<20){
        const conteudo = document.getElementById("conteudo")
        const retangulos = document.createElement("div")
        conteudo.appendChild(retangulos)
        retangulos.style.backgroundColor = "grey"
        if(i%2===0){
            retangulos.style.backgroundColor = "red"
        }
        retangulos.style.height = "20px"
        let j=sampleArray[i]
        retangulos.style.width = j + "px"
        const space = document.createElement("br")
        conteudo.appendChild(space)
        i++
    }
}

function kataBonus5() {
    let i=0
    while(i<20){
        const conteudo = document.getElementById("conteudo")
        const retangulos = document.createElement("div")
        conteudo.appendChild(retangulos)
        retangulos.style.backgroundColor = "grey"
        if(sampleArray[i]%2===0){
            retangulos.style.backgroundColor = "red"
        }
        retangulos.style.height = "20px"
        let j=sampleArray[i]
        retangulos.style.width = j + "px"
        const space = document.createElement("br")
        conteudo.appendChild(space)
        i++
    }
}
