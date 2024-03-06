const mainLeftContainer = document.querySelector(".main-left-container")

const leftTitle = () => {
    const div = document.createElement(`div`)
    const h3 = document.createElement(`h3`)


    div.classList.add(`main-left-title-container`)
    h3.classList.add(`main-left-title`)
    h3.innerText = `Welcome to Global Dawgs!`


    div.append(h3)
    mainLeftContainer.appendChild(div)


}





export const leftMain = () => {
    leftTitle()
}
