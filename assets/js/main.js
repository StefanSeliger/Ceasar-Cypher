let ceasar=() => {
    let x = ""
    let code = document.getElementById("code")
    let decode = document.getElementById("decode")
    let textInput = document.getElementById("textInput")
    let keyNumber = document.getElementById("keyNumber")
    let output = document.getElementById("output")
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    let newAlphabet = new Proxy(alphabet, {
        get(target,prop) { //target=Array (alphabet) - prop=Property Elemente des Arrays
            if(!isNaN(prop)) {
                prop = parseInt(prop, 10)
                if (prop < 0) {
                    prop += target.length
                }
            }
            return target[prop]
        }
    })

    let inputSplit = textInput.value.toLowerCase().split("")
    if (code.checked ) {
        for (let i = 0; i < inputSplit.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (inputSplit[i] == alphabet[j]) {
                    if ((j+Number(keyNumber.value)) <= 26) {
                        x += newAlphabet[j+Number(keyNumber.value)]
                        output.innerHTML = x
                    } else {
                        x += newAlphabet[j+Number(keyNumber.value - 26)]
                        output.innerHTML = x
                    }
                    
                }
            }
        } 
    } else if (decode.checked) {
        for (let i = 0; i < inputSplit.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (inputSplit[i] == alphabet[j]) {
                    if ((j+Number(keyNumber.value)) <= 26) {
                        x += alphabet[(j-Number(keyNumber.value))]
                        output.innerHTML = x
                    } else {
                        x += alphabet[(j+Number(keyNumber.value)) -26]
                        output.innerHTML = x
                    }
                    
                }
            }
        }
    } else {
        output.innerHTML = "Ceasar Cipher Result"
    }
    
    
}
ceasar()
