
// Geneartes a random numbet betwen the min (inclusive) and the max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAttackeeName(isPlayerTurn, type){
    if(isPlayerTurn && type === 'HEALS') {
        return 'HIMSELF';
    }
    else if(isPlayerTurn) {
        return 'MONSTER';
    }
    else{
        return 'PLAYER';
    }
}

// geneartes a log message based on the players turn, type of turn it was, and the amount done
function createLogMessage(isPlayerTurn, type, amount) {
    var attackerName = isPlayerTurn ? 'PLAYER' : 'MONSTER';
    var attackeeName = getAttackeeName(isPlayerTurn, type);

    return `${attackerName} ${type} ${attackeeName} FOR ${amount}`;
}

new Vue({
    el: '#app',
    data: {
        hasGameStarted: false,
        isPlayerTurn: false,
        playerHealth: 100,
        monsterHealth: 100,
        logs: []
    },
    watch: {
        isPlayerTurn: function(newValue) {
            // no longer the players turn, enemy can attack
            if(newValue === false && this.hasGameStarted){
                this.attack(1, 20);
            }
        }
    },
    methods: {
        togglePlayerTurn: function() {
            this.isPlayerTurn = !this.isPlayerTurn;
        },
        addLog: function(logType, amount) {
            var log = {
                message: createLogMessage(this.isPlayerTurn, logType, amount),
                logStyles: {
                    'player-turn': this.isPlayerTurn,
                    'monster-turn': !this.isPlayerTurn 
                }
            }

            this.logs.unshift(log);
        },
        startGame: function() {
            this.hasGameStarted = true;
            this.isPlayerTurn = true;
        },
        attack: function(min, max) {
            var attackAmount = getRandomInt(min, max);
            if(this.isPlayerTurn){
                this.monsterHealth -= attackAmount;
            }
            else {
                this.playerHealth -= attackAmount
            }
            
            this.addLog('HITS', attackAmount);
            if(this.monsterHealth <= 0 || this.playerHealth <= 0) {
                this.gameOver()
            }

            this.togglePlayerTurn();
        },
        heal: function() {
            if(this.isPlayerTurn && this.playerHealth <= 90) {
                this.playerHealth += 10;
            }
            else {
                this.monsterHealth += 10;
            }

            this.addLog('HEALS', 10);
            this.togglePlayerTurn();
        },
        resetGame: function() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.hasGameStarted = false;
            this.isPlayerTurn = false;
            this.logs = [];
        },
        gameOver: function() {
            if(this.isPlayerTurn) {
                window.alert("YOU WIN!")
            }
            else {
                window.alert("YOU LOST!");
            }

            this.resetGame();
        }
    }
})