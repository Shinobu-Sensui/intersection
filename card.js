let images = [...Array(32)].map((_, i) => `./img/abstrait${i + 1}.jpg`)
    images = [...images, ...images]
const cards = () => {
    const container = document.querySelector('#root')
    let cardsHTML = ""
    images.forEach(imgURL => {
       cardsHTML += `<div class="container-img"><img class="img" src=${imgURL}> </img></div>`
    })  
    container.innerHTML = cardsHTML
}

cards();