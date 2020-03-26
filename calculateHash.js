const sha256 = require('crypto-js/sha256')

function calculateHash(block) {
    return sha256(
        block.index +
        block.timestamp +
        block.lastHash +
        JSON.stringify(block.data) +
        block.nonce
    ).toString()
}

module.exports = calculateHash
