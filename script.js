const images = [
    '1_image.svg',
    '2_image.svg',
    '3_image.svg',
    '4_image.svg',
    '5_image.svg',
    '6_image.svg',
]



const body = document.querySelector('[data-body]')
const cube = document.querySelector('[data-cube]')
const image = document.querySelector('[data-img]')
const button = document.querySelector('[data-button]')



button.addEventListener('click', ()=>{
    let randomImage = getRandomImage();
    image.classList.add('hide')
    setTimeout(function (){
        cube.classList.add('rotate')
        image.classList.add('un-hide')
        image.classList.remove('hide')
        image.setAttribute('src', images[randomImage])
    }, 100)
    image.classList.remove('un-hide')
    cube.classList.remove('rotate')
})

function getRandomImage(){
    return Math.floor(Math.random() * images.length)
}