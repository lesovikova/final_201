'use strict';

let state = new AppState();
state.takeFromLocalStorage();
compareDays(state.allDays)

form.addEventListener("submit", getResults);

function compareDays(data){
    const d = new Date(); 
    const date = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
    console.log(date);
    if(data.find(e => e.date === date)){
        showFinish();
    }
}