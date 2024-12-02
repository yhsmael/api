let img = ''
 async function runProcess(){
 try{
 const response = await fetch('https://rickandmortyapi.com/api/character');
 const data = await response.json();
 const { results } = data;

 console.log(img);
 console.log(data);
 results.forEach(personagem => {
    img += `
    <p>name: ${personagem.name} ${personagem.id}</p>
    <img src = "${personagem.image}">
    `
 });

    document.querySelector('.div').innerHTML += img;
    

 }catch(error){
    console.log(error);
 }

}
runProcess();

