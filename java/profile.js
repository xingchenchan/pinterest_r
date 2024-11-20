var gray200="#e9e9e9"
var gray100 ="#f1f1f1"

function buttonclick(){
    console.log("button was clicked")
    const button = document.querySelector('button')
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = gray200
    })

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = "white"
    })
    console.log("finished")

    return 

    // cannot be applied to other functions
}

function divclick(){
    console.log("div was clicked")
    const div = document.querySelector('div')
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "red"
    })

    div.addEventListener('mouseleave', () => {
        div.style.backgroundColor = "white"
    })
    console.log("finished")

    return 

}

function inputclick(){
    console.log("input was clicked")
    const div = document.querySelector('input')
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = gray200
    })

    div.addEventListener('mouseleave', () => {
        div.style.backgroundColor = gray100
    })
    console.log("finished")

    return 
}

