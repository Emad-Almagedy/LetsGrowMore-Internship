let button = document.querySelector('button');
let input = document.querySelector('input');
let form = document.querySelector('form');
let section = document.querySelector('section');


form.addEventListener('submit',function(e){
    e.preventDefault();
    let task = `
    <div class="task">
      <span class="icon-star icon"></span>
      <p> ${input.value}</p>
      <div>
        <span class="icon-heart icon"></span>
        <span class="icon-trash-o icon"></span>
      </div>
      <!-- <span class="icon-smile-o"></span> -->
  
    </div>
    `;
    section.innerHTML+= task;   // aftet pressing the button it saves 'emad'after the section
    input.value = ' ';


});

section.addEventListener ('click',function(e){
    if (e.target.className == 'icon-trash-o icon'){
        e.target.parentElement.parentElement.remove();

    }else if (e.target.className == 'icon-heart icon') {
        e.target.classList.add('red');
        e.target.parentElement.parentElement.querySelector('p').classList.add('done');


    }
    else if (e.target.className == 'icon-heart icon red') {
    e.target.classList.remove('red');
    e.target.parentElement.parentElement.querySelector('p').classList.remove('done');


    }else if (e.target.className == 'icon-star icon') {
        e.target.classList.add('yellow');
        section.prepend (e.target.parentElement);
    }else if (e.target.className == 'icon-star icon yellow') {
        e.target.classList.remove('yellow');
    }


});


