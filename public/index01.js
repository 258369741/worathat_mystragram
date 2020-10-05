function addImage01(keyword,index){
    const imgElement = document.createElement('img');
    imgElement.src=`https://source.unsplash.com/400x450?${keyword}&sig=${index}`;

    const garally = document.querySelector(".garally");
    garally.appendChild(imgElement);
}

function main01(){
    addImage01("dog",3);
    
   
}
main01();