const calculateHash = require('./calculateHash')
const Block = require('./block')

class Blockchain {
    constructor(difficulty) {
        this.difficulty = difficulty
        const genesisBlock = new Block(0, new Date().getTime(), null, null)
        genesisBlock.mineBlock(this.difficulty)
        this.chain = [genesisBlock]
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }

    createNewBlock(data) {
        const lastBlock = this.getLastBlock()

        const newBlock = new Block(
            lastBlock.index + 1,
            new Date().getTime(),
            data,
            lastBlock.hash)
        newBlock.mineBlock(this.difficulty)
        this.addBlock(newBlock)
    }

    addBlock(newBlock) {
        const lastBlock = this.getLastBlock()

        if (newBlock.index !== lastBlock.index + 1) {
            console.error('\nERROR: Invalid index.')
        } else if (newBlock.lastHash !== lastBlock.hash) {
            console.error('\nERROR: Last hash does not correspond.')
        } else if (newBlock.hash !== calculateHash(newBlock)) {
            console.error('\nERROR: Incorrect hash.')
        } else {
            this.chain.push(newBlock)
        }
    }

    printBlocks() {
        this.chain.forEach((block) => console.info(`\n${JSON.stringify(block)}`))
    }
}

module.exports = Blockchain
