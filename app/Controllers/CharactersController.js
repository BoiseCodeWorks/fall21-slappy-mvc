import { ProxyState } from "../AppState.js"
import { characterService } from "../Services/CharacterService.js"

function _drawError(error){
  document.getElementById('error').innerText = error.message
  document.getElementById('error').classList.remove('d-none')
  
  setTimeout(() =>{
    document.getElementById('error').classList.add('d-none')
  }, 5500)
}

function _drawUpcomingCharacters(){
  let template = ''
  ProxyState.characters.forEach(character => {
    template += character.upNextTemplate
  })
  document.getElementById('up-next').innerHTML = template
}


function _drawCurrentEnemy(){
  document.getElementById('current-enemy').innerHTML = ProxyState.currentCharacter.currentEnemyTemplate
}

function _drawGameOver(){
  alert('congrats until you sleep')
}


export class CharactersController{
  constructor(){
    ProxyState.on('characters', _drawUpcomingCharacters)
    ProxyState.on('currentCharacter', _drawCurrentEnemy)
    ProxyState.on('gameOver', _drawGameOver)
    _drawCurrentEnemy()
  }

  addCharacter(){
    // okay boomer
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const formElem = event.target

    // TODO extract data from form
    var characterData = {
      name: formElem.characterName.value,
      img: formElem.characterImg.value
    }
    console.log('the form data', characterData)

    // TODO ask the service to add the character
    try{
      characterService.addCharacter(characterData)
    }catch(error){
      _drawError(error)
    }

    console.log('does the form work??')
    
    formElem.reset()
  }

  attack(){
    try{
      characterService.attack()
    }catch(error){
      _drawError(error)
    }
  }

}
