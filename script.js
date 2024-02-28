const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonShowSecond = document.querySelector('.show-second');
const aboutButton = document.querySelector('.about-button');
const homeButton = document.querySelector('.home-button');


homeButton.addEventListener('click', function() {
    list.innerHTML = ""
});


aboutButton.addEventListener('click', function() {
    list.innerHTML = "<p class='about'>Trabalhamos com dedicação e amor, agradecemos a você que deposita sua confiança em nós, para tornar sua comemoração e o  seu dia mais doce</p>"
});


let myLi = ''

function showAll() {
    myLi = ''

    menuOptions.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p>${product.description}</p>
            </li>
        `

    });

    list.innerHTML = myLi
};


function ShowSecond() {
    myLi = ''

    menuOptionssecond.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p>${product.description}</p>
            </li>
        `

    });

    list.innerHTML = myLi

};



buttonShowAll.addEventListener('click', showAll);
buttonShowSecond.addEventListener('click', ShowSecond);



