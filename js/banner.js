class banner {
    CriarBanner(IdAlvo, ListaBanner) {
        let Elemento = document.getElementById(IdAlvo)
        Elemento.innerHTML += "<article></article>"
        Elemento.innerHTML += "<button id='btBannerAnterior'> < </button>"
        Elemento.innerHTML += "<button id='btBannerProximo'> > </button>"

    }
    ModificaBanner(IdAlvo = "", ListaBanner = [""], Index = 0) {
        let banner = document.getElementById(IdAlvo).getElementsByTagName("article")[0]
        banner.innerHTML = ListaBanner[Index]
    }
}

export default banner