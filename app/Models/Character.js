export class Character{
  constructor(characterData){
    this.name = characterData.name
    this.img = characterData.img
    this.health = Math.floor(Math.random() * 50) + 50
  }

  get upNextTemplate(){
    return /*html*/`
    <img 
      src="${this.img}" 
      title="${this.name}" 
      alt="character img" 
      height="45" 
      width="45" 
      class="rounded mr-3 shadow">                        
    `
  }

  get currentEnemyTemplate(){
    return /*html*/`
    <div class="bg-dark p-3 rounded" onclick="app.charactersController.attack()">
        <img src="${this.img}" alt=""
            class="img-fluid rounded">
        <h3 class="text-light text-center mt-3 mb-0 text-uppercase">${this.name}</h3>
        <p class="text-center m-0 text-light">💖 ${this.health}</p>
    </div>
    `
  }


}