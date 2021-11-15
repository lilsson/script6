// let user = {
//     name: "giorgi",
//     age: 20
// }
// // გიორგი არის 20 წლის

// let printName = user.name + " არის " + user.age + " წლის ";
// let printName1 = `${user.name} არის ${user.age} წლის`; is6 სტანდარტით
// console.log(printName1);

// let number = 20;

// if(number > 10) {
//     console.log("hello");
// }else{
//     console.log("error");
// }

// let rezult = (number > 10) ? "hello" : "error"; 
// console.log(rezult);

// let number = 20;

// if (number < 10) {
//     console.log("hello");
// }else if ( number < 15) {
//     console.log("hello1");
// }else if (number < 50) {
//     console.log("hello3");
// }else {
//     console.log("error");
// }

// let rezult = (number < 10) ? "hello" :
//  (number < 15) ? "hello2" :
//  (number < 50) ? "hello3" :
//  "error";

//  console.log(rezult);

// ajax requist
// 1. xml http requist
// 2. fetch

// function getUsers (){

//     function render (){
//         let response = this.responseText;
//         let responseData = JSON.parse(response);

//         let ul = document.createElement ("ul");
        
        
//         responseData.data.forEach( item => {
//             let li = document.createElement('li');
//             li.textContent = item.last_name;
//             li.classList.add("show");
            
            
//             ul.appendChild(li);
//         })



//         document.getElementById("ips").appendChild(ul);
//         console.log(responseData);
//     }

//     function errorRender() {
//         let p = document.createElement('p');
//         p.textContent = "server error";
//         p.classList.add("error");

//         document.getElementById("ips").appendChild(p);
//     }


//     let requist = new XMLHttpRequest();
 
//     requist.addEventListener("load", render);
//     requist.addEventListener("error", errorRender)

//     requist.open("GET", "https://reqres.in/api/users?page=2");
//     requist.send();
// }

// getUsers();


// fetch

 fetch("https://reqres.in/api/users?page=2" , {
           method: "GET"
    })
  .then(function(response) {
      if (response.status !== 200) {
          throw response.status;

      } 
      return response.json();
  })
  
  .then(function(responseData) {
      console.log(responseData);

      let ul = document.createElement ("ul");
      var fragment = document.createDocumentFragment();

      responseData.data.forEach( item => {
                    let li = document.createElement('li');
                    li.textContent = item.last_name;
                    li.classList.add("show");

                    fragment.appendChild(li);

      })
         ul.appendChild(fragment);        
        document.getElementById("ips").appendChild(ul);           
  })
  .catch(function(error) {
    if(error == 404){
        console.log("Page Not Found");
    } else  if (error == 500){
        console.log("Server Error");
    } else{
        console.log("error");
    }
  });
