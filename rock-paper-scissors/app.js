const game = () => {
    let pScore = 0
    let cScore = 0

    // Inicia o game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button')
        const introScreen = document.querySelector('.intro')
        const match = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
        })
    }

    // Jogar partida
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand')
        const hands = document.querySelectorAll('.hands img')

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = ''
            })
        })

        // Opções do computador
        const computerOptions = ['rock', 'paper', 'scissors']

        options.forEach(option => {
            option.addEventListener('click', function () {

                // Escolha do computador
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoise = computerOptions[computerNumber]

                setTimeout(() => {
                    // Aqui é onde comparamos as mãos
                    compareHands(this.textContent, computerChoise)

                    // Atualizar imagem
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoise}.png`
                }, 2000)

                // Animação
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore
        computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoise) => {

        // Atualizar Texto
        const winner = document.querySelector('.winner')

        // Procurando por um empate
        if (playerChoice === computerChoise) {
            winner.textContent = 'It is a tie'
            return
        }

        // Verificando se é pedra
        if (playerChoice === 'rock') {
            if (computerChoise === 'scissors') {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            }
        }

        // Verificando se é papel
        if (playerChoice === 'paper') {
            if (computerChoise === 'scissors') {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
            } else {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
            }
        }

        // Verificando se é tesoura
        if (playerChoice === 'scissors') {
            if (computerChoise === 'rock') {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
            } else {
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
            }
        }
    }

    // chamar toda a função interna
    startGame()
    playMatch()
}


// inicia a função game
game()