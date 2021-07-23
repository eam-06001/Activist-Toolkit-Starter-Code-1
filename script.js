/* .js files add interaction to your website */
var factList = ["1.5 million shelter animals are euthanized each year.", "23% of dogs and 31% of cats are obtained through an animal shelter or the humane society, compared to 34% of dogs and 3% of cats obtained through a breeder.", "Over 2 million puppies sold in the U.S.A. each year came from a puppy mill.", "In puppy mills, dogs spend most of their lives in cramped cages, with no room to play or exercise.", "Female dogs are bred at every opportunity, and killed off when they can no longer reproduce.", "It cost much less to adopt than to shop.", "You open up a space for another animal in need when you adopt.", "Puppy mills prioritize making profit over the care of the dogs.", "One will always find the right animal at any shelter.", "Surprise, surprise, shelters do have purebreeds!!"];

var fact = document.getElementById("fact");

var myBtn = document.getElementById("myBtn");

var count = 0;

myBtn.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
