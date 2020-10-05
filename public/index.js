function addImage(keyword,index){
    const imgElement = document.createElement('img');
    imgElement.src=`https://source.unsplash.com/300x300?${keyword}&sig=${index}`;

    const garally = document.querySelector(".garally");
    garally.appendChild(imgElement);
}
function removeAllPhotos(){
    const garally = document.querySelector(".garally");
    garally.innerHTML = '';

}
function searchPhoto(event){
    const keyword = event.target.value;
    //console.log(keyword);
    if(event.key === 'Enter' && keyword){
        removeAllPhotos();
        for(let i =0;i<12;i++){
            addImage(keyword,i);
        }
    }
}
function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change',() => {
    document.body.classList.toggle('opa');
});

function main(){
    const controlInputs = document.querySelectorAll('.controls input');
    //console.log(controlInputs);
    controlInputs.forEach((input)=>{input.addEventListener('change',handleUpdate)}); 

    const inputElement = document.querySelector('.search');
    inputElement.addEventListener('keydown',searchPhoto);
}
main();



