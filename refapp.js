
'use strict';
let images=document.getElementById('images');


// let firstimg=document.createElement('img') ;
// images.appendChild(firstimg);
// firstimg.id='first'

// let secondimg=document.createElement('img') ;
// images.appendChild(secondimg);
// secondimg.id='second'
// let thirdimg=document.createElement('img') ;
// images.appendChild(thirdimg);
// thirdimg.id='third'

let firstImg=document.getElementById('first');

let secondImg=document.getElementById('second'); 
let thirdImg=document.getElementById('third');

let maxtrials=4;
let userNumTrial=0;  //Counter
let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;
let go=true;
let screenImagesOld=[];
let screenImagesNew=[];

   


function Product(name,source) {  // create constructor for the object
this.name=name;
this.source=source;
this.showntimes=0;
this.votes=0;
Product.allproducts.push(this);
}
Product.allproducts=[];



new Product('bag','img/assets/bag.jpg');
new Product('banana','img/assets/banana.jpg');
new Product('bathroom','img/assets/bathroom.jpg');
new Product('boots','img/assets/boots.jpg');
// new Product('breakfast','img/assets/breakfast.jpg');
// new Product('bubblegum','img/assets/bubblegum.jpg');
// new Product('chair','img/assets/chair.jpg');
// new Product('cthulhu','img/assets/cthulhu.jpg');
// new Product('dog-duck','img/assets/dog-duck.jpg');
// new Product('dragon','img/assets/dragon.jpg');
// new Product('pen','img/assets/pen.jpg');
// new Product('pet-sweep','img/assets/pet-sweep.jpg');
// new Product('scissors','img/assets/scissors.jpg');
// new Product('shark','img/assets/shark.jpg');
// new Product('sweep','img/assets/sweep.png');
// new Product('tauntaun','img/assets/tauntaun.jpg');
// new Product('unicorn','img/assets/unicorn.jpg');
// new Product('usb','img/assets/usb.gif');
// new Product('water-can','img/assets/water-can.jpg');
// new Product('wine-glass','img/assets/wine-glass.jpg');



function generateRandomIndex()
{
    return Math.floor(Math.random() * Product.allproducts.length);
}

function renderThreeImages()
{
     firstImageIndex=generateRandomIndex();
     secondImageIndex=generateRandomIndex();
     thirdImageIndex=generateRandomIndex();
   
   
   function checkIndex()
    { while(firstImageIndex === secondImageIndex ||firstImageIndex===thirdImageIndex || secondImageIndex===thirdImageIndex || go===false)
        {   firstImageIndex=generateRandomIndex();
            secondImageIndex=generateRandomIndex();
         
        }
      }
     screenImagesOld=[firstImageIndex,secondImageIndex,thirdImageIndex];
     
      for (let i = 0; i < screenImagesOld.length; i++)
         { for (let j = 0; j < screenImagesNew.length; j++) 
          {  if(screenImagesOld[i]===screenImagesNew[j]) 
            {
              go=false;
              checkIndex();
            }
          }
        }     
        
      
      
     
    


 firstImg.src=Product.allproducts[firstImageIndex].source; //  not text content img= .src to be linked // soure: constructor/parameter  
 Product.allproducts[firstImageIndex].showntimes++,
 //console.log( Product.allproducts[firstImageIndex])

    
 secondImg.src=Product.allproducts[secondImageIndex].source;
 Product.allproducts[secondImageIndex].showntimes++,
 //console.log( Product.allproducts[secondImageIndex].showntimes++);
 
 
 thirdImg.src=Product.allproducts[thirdImageIndex].source;
 Product.allproducts[thirdImageIndex].showntimes++;
 //console.log( Product.allproducts[thirdImageIndex])
  
    }
   renderThreeImages();       // see the images on the screen

 
  //  firstImgElement.addEventListener('click',handleUserClick);       
  //  secondImgElement.addEventListener('click',handleUserClick);
  //  thirdImgElement.addEventListener('click',handleUserClick);
     images.addEventListener('click',handleUserClick);


function handleUserClick(event) 
{ 
       console.log(event.target.id);
       userNumTrial++;
       console.log(userNumTrial)

    if(userNumTrial<maxtrials)
    {
       if (event.target.id==='first')  
        {   console.log(event)
         //Product.allproducts[firstImageIndex].votes++
       
        }
       
       else if  (event.target.id==='second')
      {
        //  Product.allproducts[secondImageIndex].votes++
      
       }
       else  if (event.target.id==='third')
       {//Product.allproducts[thirdImageIndex].votes++
        }
        else{ alert('Please select one of the Images ')
        userNumTrial--; }
        renderThreeImages();
    }
    
    else
    {
         images.removeEventListener('click',handleUserClick);
        // firstImgElement.removeEventListener('click',handleUserClick);
        // secondImgElement.removeEventListener('click',handleUserClick);
        // thirdImgElement.removeEventListener('click',handleUserClick);
        alert('Please click on RESULTS below to see the results')
        button.hidden=false;
    }

}
    
    let list=document.getElementById('results');
    let button=document.getElementById('button');
    button.addEventListener('click',showResults)
    
   
    
    
    function showResults ()
   { 
     for (let i=0; i< Product.allproducts.length;i++) 
   { let result=document.createElement('li');
     list.appendChild(result);
     result.textContent=`${Product.allproducts[i].name} has ${Product.allproducts[i].votes}votes and it shows ${Product.allproducts[i].showntimes} times`
   }
   button.removeEventListener('click',showResults)
   button.hidden=true;
   
   } 





  
    
     