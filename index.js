let numero1 = 0
let numero2 = 0

console.log("Digite o primeiro número")
process.stdin.on("data", function (data){
    numero1 = Number(data.toString().trim())

    console.log("Digite o primeiro número")
    process.stdin.on("data", function (data){
        numero2 = Number(data.toString().trim())
        
                let i
                let maior
                let menor
        
                if(numero1 > numero2) {
                    maior = numero1
                    menor = numero2
                } else {
                    maior = numero2
                    menor = numero1
                }
        
                i = maior
                for (i; i <= numero1 * numero2; i += maior) {
                    if(i % numero1 == 0 && i % numero2 == 0) {
                        console.log("MMC: " + i)
                        break
                    }
                }

    process.exit()
})})