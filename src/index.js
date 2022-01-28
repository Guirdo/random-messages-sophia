const messages = [
    'Carlos',
    'Paola',
    'Gissel',
    'Osvaldo',
    'Jessica',
    'Marco',
    'Mariana',
    'Miguel',
    'Armando',
    'Irving',
    'JJ',
    'Aylin',
    'Diana',
    'Raquel',
    'Eliseo',
    'Dario',
    'Enrique',
    'Adiel',
    'Athala',
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random ()*messages.length)]

    console.log(message)
}

module.exports = {randomMsg}