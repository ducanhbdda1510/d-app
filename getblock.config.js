
class Token {
	constructor(material) {
	  this.material = material;
	}
   
	go() {
	  return `https://go.getblock.io/${this.material}/`;
	}
   
	token() {
	  return this.material;
	}
}

export const getblock = {
	"shared": {
		"eth": {
			"mainnet": {
				"jsonRpc": [
					new Token ('2a270e02685144fdb052bc4a6dc4d034')
				]
			}
		}
	}
}
