const keys = document.querySelectorAll('.keys')

function playNote(e) {

    let audioKeyCode = getKeyCode(e)
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    console.log(key)
    const cantFoundKey = !key
    if (cantFoundKey){
        return
    }


    playAudio(audioKeyCode)
    addClassKey(key)
}

function addClassKey(key) {

    key.classList.toggle('playing')
}

function getKeyCode(e) {
    let keyCode
    const isKeyboard = e.type === 'keydown'
    if (isKeyboard) {
        keyCode = e.keyCode
    }
    else {
        keyCode = e.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function removePlayClass(e) {
    e.target.classList.remove('playing')
}



keys.forEach((key) => {
    key.addEventListener('click', playNote)
    key.addEventListener('transitionend', removePlayClass)
})

window.addEventListener('keydown', playNote)