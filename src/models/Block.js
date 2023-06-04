class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
   -名字
   -创世区块
   -存储区块的映射
  */
  constructor(blockchain, parentHash, height, hash) {
    this.blockchain = blockchain
    this.parentHash = parentHash
    this.height = height
    this.hash = hash
  }
  getPreviousBlock () {
    return this.blockchain.blocks[this.parentHash]
  }
}

export default Block
