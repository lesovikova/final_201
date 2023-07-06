'use strict';

const form = document.querySelector('form');

const delightsForShow = ['Walking around', 'Fellowship', 'Deliciousness', 'Transcendence', 'Goofing', 'Amelioration', 'Coitus', 'Enthrallment', 'Wildcard'];
const delightsForUse = ['walking_around', 'fellowship', 'deliciousness', 'transcendence', 'goofing', 'amelioration', 'coitus', 'enthrallment', 'wildcard'];


function NewDay(nodeList){
    for(let i = 0; i < nodeList.length; i++){
            this[nodeList[i].name] = nodeList[i].checked;
        }  
    const d = new Date(); 
    this.date = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
}

function AppState() {
    this.allDays = [];
}

AppState.prototype.getNewDay = function(){
    const results = document.querySelectorAll('[type="checkbox"]');
    this.allDays.push(new NewDay(results));
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

console.log("something");

function getResults(e) {
    e.preventDefault();
    state.getNewDay();
    state.saveToLocalStorage();
    form.reset();
    showFinish();
}

function showFinish(){
    form.classList.add("end");
    document.querySelector('.finish').style.display = "block";
}

