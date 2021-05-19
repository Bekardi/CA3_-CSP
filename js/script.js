/*storing the variables */
let myInput = document.getElementById("pass");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let speChar = document.getElementById("speChar");
let passLength = document.getElementById("passLength")



/*will show the password requirments or block them */
myInput.onfocus = function() {
    document.getElementById("checksField").style.display = "block";
};
myInput.onblur = function() {
    document.getElementById("checksField").style.display = "none";
};
/*will show if the user input matches  with the password requirments */
myInput.onkeyup = function() {
    const lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("wrong");
        letter.classList.add("correct");
    } else {
        letter.classList.remove("correct");
        letter.classList.add("wrong");
    }
    const upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("wrong");
        capital.classList.add("correct");
    } else {
        capital.classList.remove("correct");
        capital.classList.add("wrong");
    }
    const numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("wrong");
        number.classList.add("correct");
    } else {
        number.classList.remove("correct");
        number.classList.add("wrong");
    }
    const specialChars = /[^A-z\s\d][\\\^]?/g;
    if (myInput.value.match(specialChars)) {
        speChar.classList.remove("wrong");
        speChar.classList.add("correct");
    } else {
        speChar.classList.remove("correct");
        speChar.classList.add("wrong");
    }
    const validLength = 8;
    if (myInput.value.length >= 8) {
        passLength.classList.remove("wrong");
        passLength.classList.add("correct");
    } else {
        passLength.classList.remove("correct");
        passLength.classList.add("wrong");
    }

};



/*-- Customers  */



window.onload = () => {
    getRandom()
}


/*output the customers data from json */
function getRandom() {
    fetch('https://randomuser.me/api/?results=9')
        .then((res) => res.json())
        .then((data) => {
            let author = data.results;
            let output = '';
            console.log(data);
            author.forEach(function(test) {
                output += `
          <div class="customerCard">
                   <ul>
                   <img class="customerImg"src="${test.picture.large}">
                   <h2>Name: ${test.name.title + "."} ${test.name.first} ${test.name.last}</h2>
                  
                   <p>Phone Number: ${test.cell} </p>
                   <p>DOB: ${test.dob.date} </p>
                   <p>Age: ${test.dob.age} </p>
                   <p>Email: ${test.email} </p>
                   <p>Gender: ${test.gender} </p>
                   <p>City: ${test.location.city} </p>
                   <p>Country: ${test.location.country} </p>
                   <p>PostCode: ${test.location.postcode} </p>
                   
                   </ul>
              </div>`;
            });

            document.getElementById('customerOutput').innerHTML = output;

        })
}