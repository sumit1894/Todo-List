const input = document.querySelector('.todovalue');
const add = document.querySelector('.todoLists');
const btn = document.querySelector('.btn');
let LSdata = [];



const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('value')) || [];
};


const setLocalStorage = (value) => {
    return localStorage.setItem('value', JSON.stringify(value));
};

const showLSdata = () => {
    LSdata = getFromLocalStorage();
    LSdata.forEach((currvalue) => {
        const addEl = document.createElement("li");
        addEl.innerText = currvalue;
        add.appendChild(addEl);
    });

}


const removeDate=(e)=>{
    // let CLV=e.target;

    LSupdateData=LSdata.filter((currvalue)=> currvalue!==e.target.textContent);
    setLocalStorage(LSupdateData);
    // e.target.remove();// some proble in this we have to refresh again and again
    add.innerHTML="";
    showLSdata();   
    



}

const addTodoList = (e) => {


    e.preventDefault();
    const inputValue = input.value;
    let trimmedInputValue = inputValue.trim();
    LSdata = getFromLocalStorage();
    input.value = "";

    if (trimmedInputValue.length !== 0 && !LSdata.includes(trimmedInputValue)) {
        LSdata.push(trimmedInputValue);
        LSdata=[...new Set(LSdata)];//check unique value.

        
        setLocalStorage(LSdata);

        const addEl = document.createElement("li");
        addEl.innerText = trimmedInputValue;
        add.appendChild(addEl);


    }
};

showLSdata();

btn.addEventListener('click', (e) => {
    addTodoList(e);
});  


add.addEventListener("click",(e)=>{
    removeDate(e);
})