import {registerImage} from './lazy'


//crear imagen RANDOM
const minimo=1
const maximo=123
const random=()=>Math.floor(Math.random()*(maximo-minimo))+minimo

/*
<div class="p-4">
    <img class="mx-auto" width="320"src="https://randomfox.ca/images/101.jpg" alt="">
</div>
*/

//crear imagen
//agregar imagen
const createImagenNode=()=>{//funcion para crear imagenes
    const container=document.createElement('div')//crea contenedor DIV
    container.className='p-4'

    const imagen=document.createElement('img')//crea imagen IMG
    imagen.className='mx-auto'
    imagen.width='320'
    imagen.dataset.src=`https://randomfox.ca/images/${random()}.jpg`

    container.append(imagen)//IMG se agrega a DIV, retorna DIV+IMG(contenedor)
    return container
}

const mountNode= document.getElementById('images')//selecciona el ID del contenedor del html
//mountNode.append(nuevaImagen)//se agregara al contenedor del HTML

const addBUtton=document.querySelector("button[type='submit']")//selecciona la etiqueta BUTTON
const addImagen=()=>{
    const newImage=createImagenNode()//1-creo imagen
    mountNode.append(newImage)//2-agrego al div del HTML
    registerImage(newImage)//lazy.js
}
addBUtton.addEventListener('click',addImagen)//cada click, agrega imagen

//limpiar
const clean = document.querySelector('button[type="reset"]')
clean.addEventListener('click',()=>{
    mountNode.innerHTML="";
})