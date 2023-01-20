let totalImages=0
let totalLoadImages=0

const isIntersecting = (entry)=>{
    return entry.isIntersecting //insterseccion es METODO DEL OBSERVADOR true si esta dentro de la pantalla
}

//********************************************************************* */
const cargarImagen = (entry)=>{
    const nodoContainer = entry.target;//target es etiqueta CLASS
    const imagen=nodoContainer.firstChild//primer nodo
    imagen.src=imagen.dataset.src//url
    imagen.onload=()=>{//metodo de nodo, CUANDO SE HA CARGADO EL OBJETO
        totalLoadImages +=1
        printImages()
    }
    //DES-REGISTRA LA IMAGEN EN LA CONSOLA(esto porque SCROLL arriba o abajo REGISTRA NUEVAMENTE)
    observer.unobserve(imagen);
}
//********************************************************************* */

//callback
const observer = new IntersectionObserver((entries)=>{//entradas seran array
    entries.filter(isIntersecting).forEach(cargarImagen);//array se filtrara a lo que se INTERSECTAN 
    //filter= Valida si el objeto esta o no en VIEWPORT, y SI para al for
});


//********************************************************************* */
export const registerImage = (image) =>{//el observador escuchara a las imagenes que han sido creadas en el JS
    // IntersectactionObservador -> observer(image)
    observer.observe(image)//se pasa imagen a observar, mediante funcion default
    totalImages +=1
    printImages()
}
//********************************************************************* */

function printImages() {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${totalLoadImages}`);
    console.log("--------------------------------------");
}

export const resetLogState = ()=>{
    totalImages = 0;
    totalLoadImages = 0;
}