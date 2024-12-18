const img = document.querySelector('#img');
const characterStatus = document.querySelector('#characterStatus');
const characterName = document.querySelector('#characterName');
const origin = document.querySelector('#origin');
const btn= document.querySelector('#btn')
const input = document.querySelector('#character-id')


function character(){
    const id = input.value;
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res=> res.json())
    .then(data=>{
        img.src = data.image;
        characterStatus.textContent = data.status;
        characterName.textContent =  data.name;
        origin.textContent  = data.origin;
    })
};
character();
btn.addEventListener('click', character)