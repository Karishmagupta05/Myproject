let i=0;
let id;

function start(){

let images=JSON.parse(localStorage.getItem("images"))

let container=document.getElementById("slideshow")

id= setInterval(function(){
   
    if(i===images.length){
        i=0;
    }

    container.innerHTML=null;

    let image=images[i];

    let img=document.createElement("img")
    img.src=image;
    

    slideshow.append(img)
    i++;

},2000)

}


function pause(){
   clearInterval(id)
}





function storeImages(){
    let signinStatus=JSON.parse(localStorage.getItem("signinStatus"))
    if(signinStatus=="true"){
        let image_url=document.getElementById("url").value;

        let images=JSON.parse(localStorage.getItem("images")) || []
       
        images.push(image_url)
       
        localStorage.setItem("images", JSON.stringify(images))
       
        document.getElementById("url").value=null;
    }else{
        alert("please create an account first")
    }



}