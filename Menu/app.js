const menu=[
{
    id:1,
    title:'Cheese Pizza',
    category:'lunch',
    price:450,
    img:'./images/item1.jpg',
    desc:'Yummy plain pizza with tomato sauce and mozarella cheese on top. Baked on a wood-fire oven.',
}, 
{
    id:2,
    title:'Banana toast',
    category:'breakfast',
    price:150,
    img:'./images/item2.jpg',
    desc:'bread toasted on ghee and topped with fresh banana and chocolate syrup',
}, 
{
    id:3,
    title:'Daal Bhat',
    category:'lunch',
    price:550,
    img:'./images/item3.jpg',
    desc:'traditional nepali food with rice and lentil and a side of delicious curries and pickles.',
}, 
{
    id:4,
    title:'Fried chicken',
    category:'breakfast',
    price:350,
    img:'./images/item4.jpg',
    desc:'fried crispy chicken with a side of fries and dip',
},  
{
    id:5,
    title:'Masala tea',
    category:'drinks',
    price:25,
    img:'./images/item5.jpg',
    desc:'yummy milk tea infused with fragrant masala from the himalayas',
},  
{
    id:6,
    title: 'Peach ice tea',
    category:'drinks',
    price:125,
    img:'./images/item6.jpg',
    desc:'Cold refreshing ice tea with peach flavouring perfect for a cold day.',
},  
  
];
const sectionCenter=document.querySelector('.section-center');
const container= document.querySelector('.btn-container');


//load items
window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
    displayMenuButtons();

});




function displayMenuItems(menuItems){
let displayMenu= menuItems.map(function(item){
    return `<article class="menu-item">
    <img src="${item.img}" class="photo" alt="${item.title}">
    <div class="item-info">
        <header>
        <h4>${item.title}</h4>
        <h4 class="price">NRS ${item.price}</h4>
    </header>
    <p class="item-text">${item.desc}
    </p>
    </div>
</article>`;
 });
 displayMenu =displayMenu.join("");
 sectionCenter.innerHTML =displayMenu;
};

function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },
    ['all']);
    const categoryBtns=categories.map(function(category){
        return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join('');container.innerHTML =categoryBtns;
    const filterBtns=document.querySelectorAll('.filter-btn');
    //filter items
filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category= e.currentTarget.dataset.id;
         const menuCategory= menu.filter(function(menuItem){
            if(menuItem.category==category){
                return menuItem;
            }
            
    });
    if(category === 'all'){
        displayMenuItems(menu);
    }
    else{
        displayMenuItems(menuCategory);
    }
    });
});

}