/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    cuatrimestre: "1er Cuatrimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    cuatrimestre: "2do Cuatrimestre",
  },
  {
    imgUrl: "https://commons.wikimedia.org/wiki/File:Vue.js_Logo_2.svg",
    lenguajes: "Vue JS",
    cuatrimestre: "3er Cuatrimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 let nombreP = prompt('Ingrese el nombre');
let edadP = Number(prompt('En que año nacio'));
let ciudadP = prompt('Ingrese ciudad donde vive');
let estadoP = prompt('Le gusta Javascript si/no');
edadP = 2022 - edadP;
// let name = document.querySelector('#nombre');
// this.datosPersona.push({nombreP, edadP, ciudadP, estadoP});
// this.datosPersona['nombre'] = nombreP;
datosPersona['nombre'] = nombreP;
datosPersona['edad'] = edadP;
datosPersona['ciudad'] = ciudadP;
// datosPersona['interesPorJs'] = estadoP;
datosPersona.interesPorJs = estadoP;
// console.log(datosPersona[nombre]);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let name = document.querySelector('#nombre');
  let year = document.querySelector('#edad');
  let city = document.querySelector('#ciudad');
  let js = document.querySelector('#javascript');
  name.textContent = datosPersona.nombre;
  year.textContent = datosPersona.edad;
  city.textContent = datosPersona.ciudad;
  js.textContent = datosPersona.interesPorJs;
  // console.log(name);
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  if(datosPersona['interesPorJs'] == 'si' && !listado == false){
      let fila = document.querySelector('#fila');
    listado.forEach(element => {
      let cajaCreated = document.createElement('div');
      let imgCreated = document.createElement('img');
      let lenguajesCreated = document.createElement('p');
      let bimestresCreated = document.createElement('p');

      cajaCreated.classList.add('caja');
      fila.appendChild(cajaCreated);
  // agrego propiedades
      imgCreated.src = element.imgUrl;
      imgCreated.alt = element.lenguajes;
      lenguajesCreated.textContent = element.lenguajes;
      bimestresCreated.textContent = element.cuatrimestre;
      cajaCreated.appendChild(imgCreated);
      cajaCreated.appendChild(lenguajesCreated);
      cajaCreated.appendChild(bimestresCreated);
    })
    listado.pop();
    listado.pop();
    listado.pop();
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let cambiarDark = document.querySelector('#sitio');
 cambiarDark.classList.toggle('dark');
  


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

