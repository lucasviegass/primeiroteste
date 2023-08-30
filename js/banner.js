class banner {
    CriarBanner(IdAlvo, ListaBanner) {
        let Elemento = document.getElementById(IdAlvo)
        Elemento.innerHTML += "<article></article>"

    }
    ModificaBanner(IdAlvo = "", ListaBanner = [""], Index = 0) {
        let banner = document.getElementById(IdAlvo).getElementsByTagName("article")[0]
        banner.innerHTML= ListaBanner[Index]
    }
}

export default banner