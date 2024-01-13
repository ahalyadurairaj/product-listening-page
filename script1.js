
let btn = document.querySelector('#home_link');

var img_src=document.querySelector('img');
var product_name = document.querySelector('.product_name');
var sub_heading = document.querySelector('#sub_head');
var product_price = document.querySelector('#price');
var discrip = document.querySelector('#d_content');




let value=localStorage.getItem("output");
let value1=JSON.parse(value)
console.log(value1);

product_name.innerHTML=value1.ProductName;
sub_heading.innerHTML=value1.Brand;
product_price.innerHTML=value1.Price;
discrip.innerHTML=value1.discription;
img_src.src= value1.src



btn.addEventListener('click',()=>{
    location.href ="index.html"
})

