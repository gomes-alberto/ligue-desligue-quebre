const lampada = document.getElementById('lampada')
const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')

function isLampBroken() {
    return lampada.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lampada.src = 'images/ligada.jpg'
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lampada.src = 'images/desligada.jpg'
    }
}

function lampBroken() {
    lampada.src = 'images/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lampada.addEventListener('mouseover', lampOn)
lampada.addEventListener('mouseleave', lampOff)
lampada.addEventListener('dblclick', lampBroken)

// --------------CÓDIGO ANTIGO
// const turnOn = document.getElementById('turnOn');
// const turnOff = document.getElementById('turnOff');
// const lampada = document.getElementById('lampada');

// function isLampBroken() {
//     return lampada.src.indexOf('quebrada') > -1
// }

// function lampOn() {
//     if (!isLampBroken()) {
//         lampada.src = 'images/ligada.jpg';
//     }
// }

// function lampOff() {
//     if (!isLampBroken()) {
//         lampada.src = 'images/desligada.jpg';
//     }
// }

// function lampBroken() {
//     lampada.src = 'images/quebrada.jpg';
// }

// turnOn.addEventListener('click', lampOn);
// turnOff.addEventListener('click', lampOff);

// lampada.addEventListener('mouseover', lampOn)
// lampada.addEventListener('mouseleave', lampOff)

// lampada.addEventListener('dblclick', lampBroken);