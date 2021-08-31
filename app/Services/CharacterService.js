import { ProxyState } from "../AppState.js"
import { Character } from "../Models/Character.js"

function _changeCharacter() {
  console.log('he ded')
  let nextCharacter = ProxyState.characters.shift()
  ProxyState.currentCharacter = nextCharacter
  ProxyState.characters = ProxyState.characters
}


class CharacterService{
  attack() {
    ProxyState.currentCharacter.health -= 10
    
    if(ProxyState.currentCharacter.health <= 0){
      if(ProxyState.characters.length){
        _changeCharacter()
      } else {
        ProxyState.gameOver = true
        ProxyState.currentCharacter.health = 0
      }
    }

    ProxyState.currentCharacter = ProxyState.currentCharacter
    console.log('current enemy', ProxyState.currentCharacter)
  }

  constructor(){
    console.log('hello from the character service')
  }

  addCharacter(characterData){
    
    if(ProxyState.characters.length >= 3){
      // full stop
      throw new Error('Nope to many characters')
    }

    let newCharacter = new Character(characterData)
    // keep data immutable
    ProxyState.characters = [...ProxyState.characters, newCharacter]
    console.log('characters array', ProxyState.characters)
  
  }

}


export const characterService = new CharacterService()


