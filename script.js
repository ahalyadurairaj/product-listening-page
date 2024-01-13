"use strict"





var obj = [{
    src:"product-1.jpeg",
    ProductName:"High back bench",
    Brand:"Caressa",
    Price:"6.99",
    discription:"Traditional dining table styles usually feature ornate detailing like fluted or turned legs, wood carvings, and dark solid wood finishes. Often considered formal furniture, these types of dining tables come in a variety of shapes and size options to fit your space.a table, especially one seating several persons, where meals are served and eaten, especially the major or more formal meals."
},
{    src:"product-4.jpeg",
    ProductName:"Album table",
    Brand:"Caressa",
    Price:"8.99",
    discription:"GTo write a great album description, one needs to consider various elements such as the music genre or genres, the sonic details, the mood, and the overall theme or story of the album. A successful album description should also be concise.A photographic album or photo album, is a series of photographic prints collected by an individual person or family in the form of a book."

},{
    src:"product-3.jpeg",
    ProductName:"Accient Chair",
    Brand:"Caressa",
    Price:"6.99",
    discription:"A chair is a type of seat, typically designed for one person and consisting of one or more legs, a flat or slightly angled seat and a back-rest. They may be made of wood, metal, or synthetic materials, and may be padded or upholstered in various colors and fabrics.Chairs are typically used to provide support for the seated person's body and arms, although some chairs are designed for 'perching' rather than sitting."
},{
    src:"product-2.jpeg",
    ProductName:"Wooden Table",
    Brand:"Caressa",
    Price:"7.99",
    discription:" A table is a piece of furniture with a flat top supported by one or more legs. People put things on a table, often for a short time, for example food and knives and forks, etc. at a meal, cups for drinks, a book, a map, writing paper when writing, and things for hobbies.Solid wood furniture is timeless, sturdy and built to last generations, even centuries. This provides an incredible value for your money. We love the beauty of real wood, it can't be replicated. Rays, heartwood, curling are all a natural part of the mature material and add character to your furniture."


},{
    src:"product-5.jpeg",
    ProductName:"Daining table",
    Brand:"Caressa",
    Price:"6.99",
    discription:"A table is an item of furniture with a raised flat top and is supported most commonly by 1 to 4 legs (although some can have more). It is used as a surface for working at, eating from or on which to place things.Traditional dining table styles usually feature ornate detailing like fluted or turned legs, wood carvings, and dark solid wood finishes.       ."
},{
    src:"product-6.jpeg",
    ProductName:"Sofa Set",
    Brand:"Caressa",
    Price:"6.99",
    discription:"A sofa is a piece of furniture that a few people can comfortably sit on together. On a rainy weekend, you and your friends might pile on the sofa to watch scary movies and eat popcorn. A sofa is similar to a couch — officially, it needs to seat at least three or more people to qualify as a sofa. an upholstered bench or seat featuring arms and a back, allowing people to sit comfortably. This is the most common word used nowadays to describe the comfy piece of furniture we all relax on in the living room."
},{
    src:"product-7.jpeg",
    ProductName:"Modern Bookshelf",
    Brand:"Caressa",
    Price:"7.99",
    discription:"Going above their design centric profiles, modern bookcases create a convenient and practical storage space and are known as an unquestionably multi-faceted furniture element. Bookshelves for different rooms will vary in features and may include one or more of the following: Freestanding structure.A bookcase, or bookshelf, is a piece of furniture with horizontal shelves, often in a cabinet, used to store books or other printed materials. Bookcases are used in private homes, public and university libraries, offices, schools, and bookstores."
},{
    src:"product-8.jpeg",
    ProductName:"Emperer Bed",
    Brand:"Caressa",
    Price:"5.99",
    discription:" An Emperor bed is the largest of the standard bed sizes. Although it varies from retailer to retailer, the size of an emperor bed is around 215 cm x 215 cm. This size bed is perfect for couples who have a lot of space and want a luxurious sleeping experience.An emperor bed frame is an impressive 6 foot 6 inches by 6 foot 6 inches which is 200cm by 200cm. Emperor beds will offer a luxurious and spacious night's sleep whichever position you prefer to sleep."
},{
    src:"product-9.jpeg",
    ProductName:"Ucopia Sofa",
    Brand:"Caressa",
    Price:"6.99",
    discription:" The back is filled with a non-siliconized virgin polyfill for a greater back support and comfort. It is loose and not fixed to the back. The sofa has a broad wedge arm design, which allows neck support while laying. Sofa legs are made of natural solid wood, which has strong resistance to any physical impact. A sofa is a piece of furniture that a few people can comfortably sit on together. On a rainy weekend, you and your friends might pile on the sofa to watch scary movies and eat popcorn."
}]




var img_click = document.querySelectorAll('img');



// console.log(img_click);

img_click.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        window.open("index1.html","_blank")
        let json_sto=JSON.stringify(obj[index])
        localStorage.setItem("output",json_sto)
    })
})



let letters_product = document.querySelectorAll('.list_pro');

console.log(letters_product[1]);
// console.log(letters_product[0].innerText);

var  search = document.querySelector('#searchingbox');

var not_found = document.getElementById('sorry')

search.addEventListener('keyup',filterword);

function filterword(){
         
     var letters_product = document.querySelectorAll('.list_pro');
    //  console.log("output"+letters_product);
     for(var i = 0; i<=letters_product.length; i++){
        var output = letters_product[i].innerText.toLowerCase();
        var value = search.value.toLowerCase();
        // console.log("textbox="+value);
        if(output.indexOf(value)!=-1){
            
            letters_product[i].parentElement.style.display = 'block';

        }
       
        else{
            letters_product[i].parentElement.style.display = 'none';
            
            
            
     }


  
    //  if(i==8) break;
}}






























