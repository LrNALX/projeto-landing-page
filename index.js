 var leonardo = window.document.getElementById("leonardo")
 var samantha = window.document.getElementById("samantha")
 var bruna = window.document.getElementById("bruna")
 var setaesquerda = window.document.getElementById("seta-esquerda")
 var setadireita = window.document.getElementById("seta-direita")


 function rolarparadireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaesquerda.style = "display:flex; margin-top:55px"
    setadireita.style = "display:none"

 }

 function rolarparaesquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
    
 }