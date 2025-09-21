const idMainAbout = 'id-main-about'

const info = {
    name : "Luis Fabrizio",
    imgRef: "./src/assets/perfil.png",
    profession : "Estudiante de Desarrollo de software",
    email : "luis@gmail.com",
    country: "España",
    linkedin :""
}


export default function mainAbout(idContainer){
    

    const mainAboutElement = document.createElement('header')
    mainAboutElement.id = idMainAbout

    // Create Container of IMG
    const divImg = document.createElement('div')
    divImg.id = 'img-main-about'
    const imgElement = document.createElement('img')
    imgElement.src = info.imgRef
    mainAboutElement.appendChild(imgElement)

    // Create Container of Description
    const divDescription = document.createElement('div')
    divDescription.id ='description-main-about'
    
    mainAboutElement.appendChild(divDescription)

    
    

    const mainElement = document.getElementById(idContainer)
    mainElement?.appendChild(mainAboutElement)

}