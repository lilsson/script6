let mainwraper = document.getElementById('post-block');
let overlay = document.getElementById('overlay');
let close = document.getElementById('close');



function ajax() {
    let requist = new XMLHttpRequest();
    requist.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    

    requist.addEventListener('load', function() {
        let data = JSON.parse(requist.responseText); 


        data.forEach(element => {
            createPost(element);
        });

        console.log(data);
    });

    requist.send();
}
 function createPost (item) {

     let divWraper = document.createElement('div');
     divWraper.classList.add('posts');
     divWraper.setAttribute('data-id', item.id);

     let h1 = document.createElement('h1');
     h1.innerText = item.id;

     let text = document.createElement('div');
     text.innerText = item.title;
     text.classList.add('title');

     divWraper.appendChild(h1);
     divWraper.appendChild(text);

     divWraper.addEventListener('click', function(event) {
       let id = event.target.getAttribute('data-id');
       openOverlay(id);
     });

     mainwraper.appendChild(divWraper);

     console.log(divWraper);
 }

    function openOverlay (id) {
        overlay.classList.add('active');
        console.log(id);

    }
    close.addEventListener('click', function(){
        overlay.classList.remove('active');
    })


ajax();