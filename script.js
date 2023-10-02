//your code here
let images=document.getElementsByClassName("image");
let container=document.getElementById("parent")
function imageEnter(event){
    event.dataTransfer.setData("srcId",event.target.id);
    
}
function imageOver(event){
    event.preventDefault();
    
}
function imageDropped(event){

    let srcIde=event.dataTransfer.getData("srcId");
    let sourceElement=document.getElementById(srcIde);
    targetElemnt=event.target;
    let firstElement=sourceElement.nextElementSibling;
    let secondElement=targetElemnt.nextElementSibling;
    container.insertBefore(targetElemnt,firstElement);
    container.insertBefore(sourceElement,secondElement);

}

for(let i=0;i<images.length;i++){
	images[i].addEventListener("dragstart",imageEnter);
    images[i].addEventListener("dragover",imageOver);
    images[i].addEventListener("drop",imageDropped);
}
