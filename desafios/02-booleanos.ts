// Boleanos
// https://efficient-sloth-d85.notion.site/Desafio-Booleanos-aaab19f8e0394d20ae135c30094a7a3c

const user = {
  name: 'Diego Fernandes',
  height: 190,
  hasTicket: true,
}

const necessaryHeight = 130

const currentHour = new Date().getHours()

const parkIsOpen = currentHour > 9 && currentHour < 18

if (!parkIsOpen) {
  throw new Error('O parque está fechado!')
}

const userHasTicket = user.hasTicket

if (!userHasTicket) {
  throw new Error(`O ${user.name} não possui um bilhete para entrar no parque!`)
}

const canEnterToy = user.height > necessaryHeight

if (!canEnterToy) {
  throw new Error(`O ${user.name} não pode entrar no brinquedo!`)
} 

console.log(`O ${user.name} se divertiu muito! :)`)