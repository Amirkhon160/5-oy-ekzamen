let container = document.getElementById("container");
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let registration = document.getElementById("registration");

alert("username: mars \n password: 12345")

const userInfo = [
    {
        username: "mars",
        password: "12345",
    },
];

const createBtnFunc = () => {
    if (!document.querySelector('.questionBtn')) {
        let createBtn = document.createElement("button");
        let h3 = document.createElement("h3");

        h3.textContent = "Savol qo'shish uchun pastdagi tugmani bosing!";
        createBtn.classList.add("questionBtn");
        createBtn.textContent = "Add questions!";

        container.appendChild(h3);
        container.appendChild(createBtn);

        createBtn.addEventListener("click", () => {
            let questionPrompt = prompt("Savolingiz bo'sa berin");

            if (questionPrompt) {
                let questions = document.createElement("p");
                questions.textContent = "Siz kiritgan savol: " + questionPrompt;
                container.appendChild(questions);
            }
        });
    }
};

const handleCheck = () => {
    let usernameValue = username.value;
    let passwordValue = password.value;

    let validUser = userInfo.some(item => item.username === usernameValue && item.password === passwordValue);

    if (validUser) {
        let welcome = document.createElement("p");
        welcome.textContent = "Xush Kelibsan!";
        welcome.style.color = "green"
        welcome.style.fontSize = '20px'
        container.appendChild(welcome);
        createBtnFunc();
    } else {
        let error = document.createElement("p");
        error.textContent = "ID yoki Username xato!";
        error.style.color = 'red'
        container.appendChild(error); 
        createBtnFunc();
    }
};

registration.addEventListener("click", (e) => {
    e.preventDefault();
    handleCheck();
});
