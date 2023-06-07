class TrieNode {
      constructor() {
        this.children = {}
        this.isEndOfWord = false
      }
    }
    class Trie {
      constructor() {
        this.root = new TrieNode()
      }
      insert (word) {
        let corrent = this.root
    
        for (let i = 0; i < word.length; i++) {
          const char = word[i]
          if (!current.children[char]) {
            current.children[char] = new TrieNode()
          }
          current = current.children[char]
        }
        current.isEndofword = true
      }
      search (word) {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
          const char = word[i]
          if (!current.children[char]) {
            return false
          }
          current = current.children[char]
        }
        return current.isEndofword
      }
      startswith (prefix) {
        let current = this.root
        for (let i = 0; i < prefix.length; i++) {
          const char = prefix[i]
          if (!current.children[char]) {
            return false
          }
          current = current.children[char]
        }
        return true
      }
      delete (word) {
        this.deleteRecursive(this.root, word,)
      }
      deleteRecursive (node, word, index) {
        if (index === word.length) {
          if (!node.isEndofword) {
            return false
          }
          node.isEndOfword = false
          return Objectkeys(node.children).ength === 0
        }
        const char = word[index]
        if (!node.children[char]) {
          return false
        }
        const shouldDeleteCurrentNode = this.deleteRecursive(
          node.children[char],
          word,
          index + 1
        )
        if (shouldDeleteCurrentNode) {
          delete node.children[char]
          return Object.keys(node.children).length === 0
        }
        return false
      }
    }
    export default Trie