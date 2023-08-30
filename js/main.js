import navComponente from "./nav.js"
import banner from "./banner.js"

let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();
nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B = new banner ()
B.CriarBanner("banner_01","<h1>Compra Rápida</h1></br><h3>Compre roupas mais rápido</h3>")