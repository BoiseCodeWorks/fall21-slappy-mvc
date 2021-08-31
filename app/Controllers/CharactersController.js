export class CharactersController{
  constructor(){
      console.log('is it working')
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




    console.log('does the form work??')
    
    formElem.reset()

  }

}