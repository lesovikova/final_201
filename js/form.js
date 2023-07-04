'use strict';

const delights = ['walking_around', 'fellowship', 'deliciousness', 'transcendence', 'goofing', 'amelioration', 'coitus', 'enthrallment', 'wildcard'];


function NewDay(arr, nodeList){
    for(let i = 0; i < arr.length; i++){
            console.log(nodeList[i].checked);
            this[arr[i]] = nodeList[i].checked;
        }  
    const d = new Date(); 
    this.date = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
}

function AppState() {
    this.allDays = [];
}

AppState.prototype.getNewDay = function(){
    const results = document.querySelectorAll('[type="checkbox"]');
    this.allDays.push(new NewDay(delights, results));
}


AppState.prototype.saveToLocalStorage = function(){
    let newDay = JSON.stringify(this);
    localStorage.setItem("statistics", newDay);
}

AppState.prototype.takeFromLocalStorage = function(){
    const allDaysFromStorage = JSON.parse(localStorage.getItem("statistics"));
    if(allDaysFromStorage){
        this.allDays = allDaysFromStorage.allDays;
    }
}



function getResults(e) {
    e.preventDefault();
    state.getNewDay();
    state.saveToLocalStorage();
}

