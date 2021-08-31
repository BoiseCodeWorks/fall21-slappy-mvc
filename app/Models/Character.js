export class Character{
  constructor(characterData){
    this.name = characterData.name
    this.img = characterData.img
    this.health = Math.floor(Math.random() * 50) + 50
  }
}