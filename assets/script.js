//Pick up our DOMS
const pageImg = document.querySelector(".img")
const pageDesc = document.querySelector(".desc")
const prevBtn = document.querySelector(".previous")
const nextBtn = document.querySelector(".next")
//Make four rooms?
const roomone = {
    img: `./assets/img/Magic Living Room.png`,
    desc: `here's a description`
}

const roomtwo = {
    img: `./assets/img/Wizard Library.png`,
    desc: `here's a description 2`
}

const roomthree = {
    img: `./assets/img/Winding Pathway.png`,
    desc: `here's a description 3`
}

const roomfour = {
    img: `./assets/img/Forest Balcony.png`,
    desc: `here's a description 4`
}

const rooms = [roomone, roomtwo, roomthree, roomfour]
let currentRoom = 0

function showRoom(){
    pageImg.src = rooms[currentRoom].img
    pageDesc.textContent = rooms[currentRoom].desc
}

showRoom()

prevBtn.addEventListener("click", previous)
nextBtn.addEventListener("click", next)

function previous(){
    if(currentRoom > 0){
        currentRoom--
    }
    showRoom()
}

function next(){
    if(currentRoom < rooms.length-1){
        currentRoom++
    }
    showRoom()
}