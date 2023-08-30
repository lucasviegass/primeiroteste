import navComponente from "./nav.js"
import banner from "./banner.js"

let Menus = ["Home","Produtos","Contato"]
let nav = new navComponente();
nav.CriarNovoMenu("barra_01",Menus)
nav.CriarBarraNavUsuario("barra_01","Home")

let B = new banner ()
let BannerInfo = ["<h1>Compra Rápida</h1></br><h3>Compre roupas mais rápido</h3>","<h1>Roupas da Moda</h1></br><h3>Moda</h3>","<h1>Oferta relampago</h1>"]
B.CriarBanner("banner_01")
B.ModificaBanner("banner_01",BannerInfo,2)


let BannerIndex = 0 
setInterval(()=>{
if(BannerIndex >=2){
    BannerIndex = 0
}
B.ModificaBanner("banner_01",BannerInfo,BannerIndex)
BannerIndex+=1
},2000)