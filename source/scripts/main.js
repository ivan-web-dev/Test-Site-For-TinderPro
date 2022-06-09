"use strict"

function controlSidebar() {
    let sidebarButton = document.querySelector('.sidebar__btn');
    let arrow = document.querySelector('.arrow');
    let sidebar = document.querySelector('.sidebar');
    let sidebarCondition = false;
    sidebarButton.addEventListener('click', event => {
        if (sidebarCondition == false) {
            arrow.classList.add('arrow_active');
            sidebar.classList.add('sidebar_active');
            sidebarCondition = true;
        } else if (sidebarCondition == true) {
            arrow.classList.remove('arrow_active');
            sidebar.classList.remove('sidebar_active');
            sidebarCondition = false;
        };
    });
}; controlSidebar()

function controlPopup() {
    let body = document.querySelector('body'),
        popupLinks = document.querySelectorAll('.popup-activation'),
        closePopup = document.querySelector('#closePopup');
        
    function removeReloadButtons(elements) { 
        elements.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
            });
        });
    }; removeReloadButtons(popupLinks);
        
    function PopupActive() {
        popupLinks.forEach(item => {
            item.addEventListener('click', event => {
                let popupAnimation = document.querySelector('.popup__form');
                
                body.classList.add('body__clipping');
                popupAnimation.classList.remove('popup__animation_close');
                popupAnimation.classList.add('popup__animation_open');
            });
        }); 
    }; PopupActive();
    
    function popapClose() {
        closePopup.addEventListener('click', event => {
            let popupAnimation = document.querySelector('.popup__form');
            
            body.classList.remove('body__clipping');
            popupAnimation.classList.remove('popup__animation_open');
            popupAnimation.classList.add('popup__animation_close');
        });
    }; popapClose();
}; controlPopup();

function controlRate() {
    let headerRate = document.querySelector('.header__rate');
    
    function showRateAndRemovePopup() {
        let popupLinks = document.querySelectorAll('.popup-activation'),
            signIn = document.querySelector('#signIn'),
            popupAnimation = document.querySelector('.popup__form'),
            body = document.querySelector('body');
        
        signIn.addEventListener('click', event => {
            popupLinks.forEach(item => {
                item.classList.add('delete__btn');
            });
            
            headerRate.classList.add('show__rate');
            popupAnimation.classList.add('popup__animation_close');
            body.classList.remove('body__clipping');
        });
    }; showRateAndRemovePopup();
}; controlRate() ;

function xhrRequest() {
    function getCourse() {
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
        const xhr = new XMLHttpRequest();
        let data;
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = () => {
            data = xhr.response;
            let rate = data.Valute.USD.Value;
            showRate(rate);
        };
    }; getCourse();
    
    function showRate(rate) {
        let rateItem = document.getElementById('rate');
        rate =`1 USD = ${rate}₽`;
        rateItem.innerHTML = rate;
    };
}; xhrRequest();