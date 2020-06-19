//  get the body tag
var body=document.getElementById("root");

var body=document.querySelector("#root");

console.log(body);
//         create section 
var main=document.createElement("section");
//  classname to the section
main.classList.add("main");
// append main section to the body tag
body.appendChild(main);

//         create card1
var card1=document.createElement("article");
card1.setAttribute("class","card1");
main.appendChild(card1);

//         create Image tag
var image=document.createElement("img");
image.src="images/img.jpg";
image.alt="Profile Image";
card1.appendChild(image);
//         create line
card1.appendChild(document.createElement("hr"));
//         h2 for name
var name=document.createElement("h2");
var name1=document.createElement("h2");
name1.textContent="Praneeth Pentapati";
console.log(name)
card1.appendChild(name1);
//         careate email
var email=document.createElement("h4");
email.textContent="praneethpentapati@gmail.com";
card1.appendChild(email);

//         mobile number
var mobile=document.createElement("h4");
mobile.textContent="9704920309";
card1.appendChild(mobile);




// resume card

var card2=document.createElement("article");
card2.setAttribute("class","card2");
main.appendChild(card2);


var text=document.createElement("h2");
text.textContent="Career Objective";
card2.appendChild(text);

card2.appendChild(document.createElement("hr"));

var text1=document.createElement("p");
text1.textContent="Seeking a position as an administrative assistant at Acme Inc to leverage organizational and research skills to support internal and external communication Eager to expand my skill set through external trainings to help boost all major front desk KPIs";
card2.appendChild(text1);

var text2=document.createElement("h2");
text2.textContent="Skills";
card2.appendChild(text2);

card2.appendChild(document.createElement("hr"));

var text2=document.createElement("p");
text2.textContent="1.hduhducnhu";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="2.hduhducnhu";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="3.hduhducnhu";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="4.hduhducnhu";
card2.appendChild(text2);

var text2=document.createElement("h2");
text2.textContent="Hobbies";
card2.appendChild(text2);

card2.appendChild(document.createElement("hr"));

var text2=document.createElement("p");
text2.textContent="1.hduhducnhu fkjeincvjf jcnijnccjn";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="2.hduhducnhu fkjeincvjf jcnijnccjn";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="3.hduhducnhu fkjeincvjf jcnijnccjn";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="4.hduhducnhu fkjeincvjf jcnijnccjn";
card2.appendChild(text2);


var text2=document.createElement("h2");
text2.textContent="Languages Known";
card2.appendChild(text2);

card2.appendChild(document.createElement("hr"));

var text2=document.createElement("p");
text2.textContent="1.iuenchuine";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="2.iuenchuine";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="3.iuenchuine";
card2.appendChild(text2);

var text2=document.createElement("p");
text2.textContent="4.iuenchuine";
card2.appendChild(text2);









