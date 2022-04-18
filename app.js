"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
for (let i = 0; i < 5; i++) {
    const card = document.querySelectorAll('.card')[i];
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });
}
const url = 'https://randomuser.me/api/?results=5';
function downloadUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
        const { results } = data;
        for (let i = 0; i < 5; i++) {
            const cards = document.querySelectorAll('.card')[i];
            const cardFace = document.createElement('div');
            cardFace.classList.add('card__face');
            cardFace.classList.add('card__face--front');
            cardFace.innerHTML = `<img src="${results[i].picture.large}"  alt=""/>
        <h4>${results[i].name.first} ${results[i].name.last}</h4>`;
            const cardBack = document.createElement('div');
            cardBack.classList.add('card__face');
            cardBack.classList.add('card__face--back');
            cardBack.innerHTML = `<ul>
        <li><image src=" ${results[i].picture.medium}"></li>
        <li>${results[i].name.first} ${results[i].name.last}</li>
        <li>${results[i].email}</li>
        <li>${results[i].phone}</li>
        <li>${results[i].location.city}</li>
        <li>${results[i].location.country}</li>
        <li>register: ${results[i].registered.date.split('T')[0]}</li>
        </ul>`;
            cards.append(cardFace, cardBack);
        }
    });
}
downloadUsers();
