const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    text: "new text",
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Create DOM element; render facts in list
factsList.innerHTML = "";
// createFactsList([{text: 'Roma'}])

//Load data from Supabase
loadFats();
async function loadFats() {
  const ress = await fetch(
    "https://kehwwmedwxfsewwpwgyt.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaHd3bWVkd3hmc2V3d3B3Z3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NTU4NDksImV4cCI6MjAxODAzMTg0OX0.KWrsNRn9PeJEJyGI91OOtRBJ90i66vCrZioxifdCT0A",
        authirisation:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaHd3bWVkd3hmc2V3d3B3Z3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NTU4NDksImV4cCI6MjAxODAzMTg0OX0.KWrsNRn9PeJEJyGI91OOtRBJ90i66vCrZioxifdCT0A",
      },
    }
  );
  const data = await ress.json();
  createFactsList(data);
  // console.log(data);
  // const filteredData = data.filter(fact => fact.category === 'society')
  // console.log(filteredData);
}

// createFactsList(initialFacts)
function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML('afterbegin', '<li>Roma</li>')
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">${fact.text}
    <p>
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
        >Source</a
      >
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">
      ${fact.category}</span
    >
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

let x = 48;

console.log(typeof x);

//                                      JS Practise
// const obj = {
//   name: 'Roma',
//   age: 24,
//   isMaried: false,
//   func: function () {
//     return `My name is ${this.name} and i am ${this.age} year old and i am ${this.isMaried ? 'Married': 'Not married'}`;
//   }
// }

// const{name,age,isMaried,func} = obj
// console.log(obj.func());

// [2,4,6,8].forEach(function (x) {
//   console.log(x);
// })

// const arr = [2,4,6,8].map(function(x){
//   return x * 10
// })

// const arr = [2,4,6,8].map((x) => x * 10)
// console.log(arr);

//=============================================
// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];
// let y = 0

// CATEGORIES.map((x) => {

//   if (x.name == 'history'){
//     console.log(`We have it in ${y+1} line `);
//     y++
//   }else {
//     y++
//     return'Have no here history';
//   }
// })
