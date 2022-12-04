
const rounds = [1,2,3,4]
const solutions = ["aaa", "qqq", "www", "stonewall"]
let gameBox = document.querySelector('.game')




const start = (x) => {
    let nameRound = '.round' + x
    let playButtonID = "play-btn" + x
    let answerID = "input" + x
    let startRound = document.querySelector(nameRound)
    startRound.className = "round-ongoing" + x

    document.getElementById(playButtonID).remove()

    const inputField = document.createElement('input')
    inputField.setAttribute("id", "input" + x)
    inputField.setAttribute("type", "text")
    
    const subButton = document.createElement('button')
    subButton.innerHTML = "Submit"
    subButton.setAttribute("id", "sub-btn" + x)

    startRound.append(inputField)
    startRound.append(subButton)

    subButton.onclick = function(){
        let answer = document.getElementById(answerID).value
        
        if (answer == solutions[x-1]) {
            startRound.className = "round-done" + x
            console.log('yay')
            inputField.remove()
            subButton.remove()
            const success = document.createElement('div')
            success.innerHTML = "Done!"
            startRound.append(success)
            
        } else {
            subButton.innerHTML = "Try again" 
            document.getElementById(answerID).value = ""

        }
    }

}


rounds.forEach((x) => {
    let roundUrl = "round" + x + ".html"
    const round = document.createElement('div')
    round.innerHTML = "Round " + x 
    round.className = "round" + x
    
    const playButton = document.createElement('button')
    playButton.innerHTML = "Play"
    playButton.setAttribute("id", "play-btn" + x)

    round.append(playButton)
    gameBox.append(round)

    playButton.addEventListener('click', () => {
        start(x)
        popupWindow = window.open(roundUrl)
    
    }
    )
    
}
)

