function testadd(){
    console.log("button activated")

    const img = document.createElement("img")

    img.src = "c70b5793c38852288ff2ded36ef52fc8.jpg"

    const newlist = document.createElement("ul")

    const newli = document.createElement("li")
    
    const container = document.getElementById("mypins")

    container.appendChild(newlist)

    newlist.appendChild(newli)

    newli.appendChild(img)

    console.log("done")

}




