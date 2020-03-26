const calculateHash = require('./calculateHash')

class Block {
    constructor(index, timestamp, data, lastHash = "") {
        this.index = index
        this.lastHash = lastHash
        this.timestamp = timestamp
        this.data = data
        this.nonce = 0
        this.hash = calculateHash(this)
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
            this.nonce++
            this.hash = calculateHash(this)
        }

        if (this.index === 0)
            console.info(`Mined block. ${this.nonce} iterations. (Genesis Block)`)
        else
            console.info(`Mined block. ${this.nonce} iterations.`)
    }
}

module.exports = Block
