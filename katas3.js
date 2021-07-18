const conteudo = document.getElementById("conteudo")
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showResults(){
    const newElement = document.createElement("span");
    newElement.className = "kata";
    conteudo.appendChild(newElement)
    const newText = document.createTextNode(i + " ");
    newElement.appendChild(newText);
}

function br(){
    const space = document.createElement("hr")
    conteudo.appendChild(space)
}
function kata1() {
    const array = []
    for(i=1; i<=25; i++) {
        array.push(i)
        showResults()
    }
    br()
    return array.join(", ")
}
kata1()

function kata2() {
    const array = []
    for(i=25; i>0; i--) {
        array.push(i)
        showResults()
    }
    br()
    return array.join(", ")
}
kata2()

function kata3() {
    const array = []
    for(i=-1; i>-26; i--) {
        array.push(i)
        showResults()
    }
    br()
    return array.join(", ")
}
kata3()

function kata4() {
    const array = []
    for(i=-25; i<0; i++) {
        array.push(i)
        showResults()
    }
    br()
    return array.join(", ")
}
kata4()

function kata5() {
    const array = []
    for(i=25; i>-26; i--) {
        if(i%5===0){
            array.push(i)
            showResults()
        }
    }
    br()
    return array.join(", ")
}
kata5()

function kata6() {
    const array = []
    for(i=1; i<=100; i++) {
        if(i%3===0){
            array.push(i)
            showResults()
        }
    }
    br()
    return array.join(", ")
}
kata6()

function kata7() {
    const array = []
    for(i=1; i<=100; i++) {
        if(i%7===0){
            array.push(i)
            showResults()
        }
    }
    br()
    return array.join(", ")
}
kata7()

function kata8() {
    const array = []
    for(i=100; i>0; i--) {
        if(i%7===0 || i%3===0){
            array.push(i)
            showResults()
        }
    }
    br()
    return array.join(", ")
}
kata8()

function kata9() {
    const array = []
    for(i=1; i<100; i++) {
        if(i%5===0){
            array.push(i)
            showResults()
        }
    }
    br()
    return array.join(", ")
}
kata9()

function kata10() {
    for(j=0; j<sampleArray.length; j++) {
        i = sampleArray[j]
        showResults()
    }
    br()
    return sampleArray.join(", ")
}
kata10()

function kata11() {
    const array = []
    for(j=0; j<20; j++) {
        if(sampleArray[j]%2===0){
            array.push(sampleArray[j])
            i = sampleArray[j]
            showResults()
        }
    }
    br()
    return array.join(", ")
}
kata11()

function kata12() {
    const array = []
    for(j=0; j<20; j++) {
        if(sampleArray[j]%2!=0){
            array.push(sampleArray[j])
            i = sampleArray[j]
            showResults()
        }
    }
    br()
    return array.join(", ")
}
kata12()

function kata13() {
    const array = []
    for(j=0; j<20; j++) {
        if(sampleArray[j]%8===0){
            array.push(sampleArray[j])
            i = sampleArray[j]
            showResults()
        }
    }
    br()
    return array.join(", ")
}
kata13()

function kata14() {
    const array = []
    for(j=0; j<20; j++) {
            array.push(sampleArray[j] * sampleArray[j])
            i = sampleArray[j] * sampleArray[j]
            showResults()
    }
    br()
    return array.join(", ")
}
kata14()

function kata15() {
    let soma = 0
    for(j=1; j<=20; j++) {
        soma+=j
    }
    i = soma
    showResults()
    br()
    return soma
}
kata15()

function kata16() {
    let soma = 0
    for(j=0; j<20; j++) {
        soma+=sampleArray[j]
    }
    i = soma
    showResults()
    br()
    return soma
}
kata16()

function kata17() {
    let menor = 9096
    for(j=0; j<20; j++) {
        if(sampleArray[j]<menor){
            menor = sampleArray[j]
        }
    }
    i = menor
    showResults()
    br()
    return menor
}
kata17()

function kata18() {
    let maior = 0
    for(j=0; j<20; j++) {
        if(sampleArray[j]>maior){
            maior = sampleArray[j]
        }
    }
    i = maior
    showResults()
    br()
    return maior
}
kata18()

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
    br()
}
kataBonus1()

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
    br()
}
kataBonus2()

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
    br()
}
kataBonus3()

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
    br()
}
kataBonus4()

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
    br()
}
kataBonus5()
