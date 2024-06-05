//import "./styles.css";

let colorVal='var(--main-bg)';
let colorNav='var(--top-menu-bg)';
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

let mainEle=document.getElementById("main_Div");
mainEle.style.textAlign='center';
mainEle.style.backgroundColor=colorVal;
mainEle.innerHTML= `<h1>DOM Manipulation</h1>`;
mainEle.classList.add("flex-ctr");
console.log(mainEle.outerHTML);
const topMenuEl=document.getElementById("top-menu");
//document.head.appendChild(navEle);

topMenuEl.style.height="100%";
//navEle.style.backgroundColor="blue";
topMenuEl.style.backgroundColor=colorNav;
topMenuEl.classList.add("flex-around");
let anchor;
let obj;
for(let i=0;i<menuLinks.length;i++){
    //obj.add(menuLinks[i]);
    anchor= document.createElement("a");
    obj=new Object();
    obj=menuLinks[i];
    //console.log(obj);
    Object.entries(obj).forEach(([key, value]) => {
        if(key=='href')
        anchor.setAttribute(key,value);
        if(key=='text')
        anchor.textContent=value;
        console.log(`${key} ${value}`); 
      });
   
      topMenuEl.appendChild(anchor);
   
}