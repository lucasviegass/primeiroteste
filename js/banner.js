class banner{
CriarBanner(IdAlvo,Texto){
let Elemento = document.getElementById(IdAlvo)
Elemento.innerHTML +="<article>"+Texto+"</article>"

}
}

export default banner