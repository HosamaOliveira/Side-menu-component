const template = document.createElement('template')
template.innerHTML = /*html*/`
<link rel = "stylesheet" href="style.css">

<!-- ------------------------------CSS---------------------------------- -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Philosopher:ital,wght@0,700;1,400;1,700&display=swap');

:root {
	--letterColor: rgb(226, 176, 245);
}

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Comfortaa', cursive; }




#menu {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(191, 172, 204, 0.603), rgba(212, 173, 230, 0.603));
  width: 55px;
  height: 55px;
  position: fixed;
  right: 0;
  top: 0;
  border-radius: 50%;
  overflow: hidden;
  transition: box-shadow 1.1s cubic-bezier(.19, 1, .22, 1);
  cursor: pointer;
  z-index: 1;
	-webkit-tap-highlight-color: transparent;
}

#shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #black;
  transform: scale(0);
}

#burgerMenu:checked~#menu {
  background-color: #a28cc2;
}

#burgerMenu:checked~#shadow {
  transform: scale(1);
  animation: fade linear .2s;
}

#burgerMenu:not(:checked)~#shadow {
  animation: fadeOut linear .5s;
}

.burguer {
  position: relative;
  display: block;
  background: #4a2761;
  width: 45%;
  height: 2px;
  transition: .5s ease-in-out;
  z-index: 1;
}

.burguer:before, .burguer:after {
  background: #4a2761;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  transition: .5s ease-in-out;
}

.burguer:before {
  top: -10px;
}

.burguer:after {
  bottom: -8.4px;
}

input:checked~label #menu {
  background-image: linear-gradient(rgba(129, 65, 172, 0.603), rgba(169, 111, 207, 0.664));
}

input:checked~label .burguer {
  transform: rotate(45deg);
  width: 30px;
  border-radius: 1rem;
}

input:checked~label .burguer:before {
  transform: rotate(90deg);
  top: 0;
  border-radius: 1rem;
}

input:checked~label .burguer:after {
  transform: rotate(90deg);
  bottom: 0;
  border-radius: 1rem;
}

input {
  display: none;
}

#sub-menu {
  display: flex;
  flex-direction: column;
  position: fixed;
  text-align: center;
  align-items: center;
  width: 250px;
  height: 100vh;
  right: -400px;
	top: 0;
	padding-bottom: 10px;
  background-image: linear-gradient(rgba(165, 94, 209, 0.842), rgba(196, 174, 209, 0.842));
  box-shadow: 0 0 10px 4px #11002bdc;
  transition: 1s;
  overflow-y: auto;
  overflow-x: hidden;
}

input:checked~#sub-menu {
  top: 0;
  right: 0;
  transition: 1s;
}

#h2 {
	width: 100%;
	padding: 10px;
	font-size: 20pt;
	margin-right: 50px;
	margin-top: 25px;
	color: rgb(226, 176, 245);
	text-shadow: 0 4px 2px rgb(89, 35, 117), 0px 5px 2px rgb(168, 81, 226);
}

#contentMenu {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 100px;
  width: 90%;
	padding: 10px;
	margin-top: 40px;
}

#contentLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
}

.link {
  width: 80%;
  height: 35px;
  margin-top: 25px;
  text-align: center;
  cursor: pointer;
  color: rgb(27, 16, 48);
  transition: all 0.3s;
  position: relative;
}

.naviMenu {
  margin: auto;
  color: #2d0f41;
  font-family: 'Philosopher', sans-serif;
  font-size: 14pt;
  border: 1px;
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background-image: linear-gradient(rgb(147, 87, 187), rgb(214, 173, 230));
	box-shadow: #39145c 0 1px 2px .1px;
}

.naviMenu::before {
  content: '';
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: rgb(105, 19, 131);
  border-bottom-color: rgb(105, 19, 131);
  transform: scale(0.1, 1);
}

.naviMenu:hover {
  letter-spacing: 1px;
  /*alarga o botão*/
  text-shadow: 0 1px 2px rgb(183, 70, 211);
  background-image: linear-gradient(rgba(147, 87, 187, 0.74), rgb(214, 173, 230, 0.74));
  box-shadow: 0 0 10px 1px rgb(91, 37, 99);
}

.naviMenu:active {
  letter-spacing: 0;
  background-image: linear-gradient(rgb(147, 87, 187), rgb(214, 173, 230));
  box-shadow: 0 0 10px 1px rgb(198, 54, 218);
}

.naviMenu:hover::before {
  opacity: 1;
  transform: scale(1, 1);
}

.naviMenu::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background-color: rgba(121, 108, 240, 0.1);
}

.naviMenu:hover::after {
  opacity: 0;
  transform: scale(0.1, 1);
}

#ico {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#socialNetworkText {
	border-radius: 5px;
	padding: 10px;
	box-shadow: #39145c 0 3px 5px .2px;
	font-size: 20pt;
	color: #2d0f41;
	background-image: linear-gradient(rgb(147, 87, 187), rgb(214, 173, 230));
}

p {
	text-shadow: 1px 4px 5px #000000ad;
	color: yellow;
	position: relative;
	margin: auto;
	font-size: 20pt;
}


a {
  width: 40px;
  transition: transform .5s;
	text-decoration: none;
}

a:hover {
  transform: scale(1.2);
  transition: transform .5s;
}

.ic {
  width: 100%;
  border-radius: 1ex;
}


</style>

<!-- ------------------------------HTML------------------------------------ -->
<aside>

	<input type="checkbox" id="burgerMenu" checked>

	<label for="burgerMenu">
        
		<div id="menu">
    	<span class="burguer"></span>
		</div>

	</label>

	<!-- <div id="shadow" onclick="document.getElementById('burgerMenu').checked=false"></div> -->
		
		
	<nav id="sub-menu">

		<h2 id="h2">Rosa de Pedra</h2>

		<div id="contentMenu">

			<div id="contentLink">  
				<div class="link"><button class="naviMenu" id="home" onclick="navigate('home')"><a href="">Home</a></button></div>
				<div class="link"><button class="naviMenu" id="photos" onclick="navigate('photos')"><a href="">Galeria</a></button></div>
				<div class="link"><button class="naviMenu" id="videoClasses" onclick="navigate('videoClasses')  "><a href="">Vídeo-Aulas</a></button>
			</div>

			
		</div>

		<div id="socialNetworkText">Acesse nossas redes sociais <p>&#128071</p></div>

		<div id="ico">

			<a href="https://wa.me/5547988870279" target="blank" class="linkIcon" ><img class="ic"  src="./iconsComponent/whats.png"   alt="Whats"><br></a>

			<a href="https://www.facebook.com/Kafeskal/?ref=pages_you_manage" target="blank"  class="linkIcon"><img   class="ic" src="./iconsComponent/facebook.png" alt="facebook"><br></a>

			<a href="https://www.instagram.com/hosamaoliveira/" target="blank" class="linkIcon"><img class="ic" src="./iconsComponent/instagram.png" alt="instagram"><br></a>

		</div>

		
	</nav>


</aside>
`
// ------------------------------------------------------------------

class LateralMenu extends HTMLElement {
  constructor() {
    super()

    this.build()
  }

  build() {
    const shadow = this.attachShadow({'mode': 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
	
	// function navigate(page) {
	// 	switch (page) {
	// 		case 'home':
	// 			location.href = './index.html'
	// 			break
	// 		case 'photos':
	// 			location.href = './fotos.html'
	// 			break
	// 		case 'revenues':
	// 			location.href = './revenues.html'
	// 			break
	// 		case 'videoClasses':
	// 			location.href = './videoClasses.html'
	// 			break
	// 		case 'btRegistration':
	// 			location.href = './registration.html'
	// 			break
	// 		case 'title':
	// 			location.href = './index.html'
	// 			break
	// 	}
	// }
}








customElements.define('lateral-menu', LateralMenu)