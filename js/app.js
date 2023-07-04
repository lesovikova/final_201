'use strict';

let state = new AppState();
state.takeFromLocalStorage();

document.querySelector('form').addEventListener("submit", getResults);

