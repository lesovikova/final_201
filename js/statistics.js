'use strict';

const percentsArray = [];

let state2 = new AppState();
state2.takeFromLocalStorage();

calculatePercents(state2.allDays);
displayPercents(percentsArray, delightsForShow);
displayAllDays(state2.allDays);

function calculatePercents(data) {
    let marker = {};
    delightsForUse.forEach((item) => marker[item] = 0);
    for(let i = 0; i < data.length; i++){
        for (let item in data[i]) {
            if(data[i][item] === true){
                        marker[item]++;
                    }
        }
    }
    for (let delight in marker){
        percentsArray.push((marker[delight]/data.length*100).toFixed(1));
    }
}



function displayPercents(data, names) {
    const container = document.querySelector('.percents__list');
    const li = document.createElement('li');
    if(isNaN(data[0])){
        li.textContent = "You haven't filled a day yet!";
        container.append(li);
    }
    else {
    for(let i = 0; i < data.length; i++) {
        console.log(data[i]);
        
        const li = document.createElement('li');
       
        li.textContent = `
        ${names[i]} - ${data[i]}% 
        `;
        container.append(li);
    }
    }
}

function returnDelightsOfDay(data){
    const arr = [];
    for(let item in data){
        if(data[item] === true) {
            if(item === 'walking_around') {
                arr.push('Walking around');
            }            
            else {
            arr.push(item.charAt(0).toUpperCase() + item.slice(1));
            }
        }
}
    if(!arr[0]) {
        return "You haven't checked anything that day";
    }
    return arr.join(", ");
    }


function displayAllDays(data){
    const container = document.querySelector('.statistics__list');
    for(let i = 0; i < data.length; i++) {
        const li = document.createElement('li');
        li.textContent = `
        ${data[i].date} - ${returnDelightsOfDay(data[i])}
        `;
        container.append(li);
    }   
}