const Blockchain = require('./blockchain')

const blockchain = new Blockchain(2)
blockchain.createNewBlock({ from: 'Adams', to: 'Ronald', amount: 1 })
blockchain.printBlocks()
