"use strict";
window.addEventListener('DOMContentLoaded', function () {

    const linksWrapperAll = this.document.querySelectorAll('.links-wrapper');
    const linkWrapperAll = this.document.querySelectorAll('.link-wrapper');
    const changes = this.document.querySelectorAll('.change');

    const cities = ['Andijan', 'Bukhara', 'Fergana', 'Jizzakh', 'Khorezm', 'Namangan', 'Navoi', 'Kashkadarya', 'Karakalpak', 'Samarkand', 'Sirdarya', 'Surkhandarya', 'Tashkent'];

    function hideLinksWrapper() {
        linksWrapperAll.forEach(function (child) {
            child.classList.remove('links-wrapper-active');
        });
    };

    function showLinksWrapper(index) {
        linksWrapperAll[index].classList.add('links-wrapper-active');
    };

    function hideChange() {
        changes.forEach(function (child) {
            child.classList.remove('change-active');
        });
    }

    function showChange(index) {
        changes[index].classList.add('change-active');
    }

    linkWrapperAll.forEach((item, index) => {
        item.addEventListener('click', function () {
            linksWrapperAll[index].classList.forEach(function (child) {
                if (child != 'links-wrapper-active') {
                    hideLinksWrapper();
                    showLinksWrapper(index);
                } else {
                    hideLinksWrapper();
                }
            });

            window.history.pushState('new', 'title', '/?region='.concat(cities[index]));
        });
    });

    changes.forEach((item, index) => {
        item.addEventListener('click', function () {
            if (item.classList != 'links-wrapper-active') {
                hideChange();
                showChange(index);
            } else {
                hideChange();
            }

            const url = new URL(window.location);

            if (index % 2 == 1) {
                url.searchParams.set('turi', 'hayvon');
                window.history.pushState({}, '', url);
            } else {
                url.searchParams.set('turi', 'usimlik');
                window.history.pushState({}, '', url);
            }
        });
    });
});

window.addEventListener('load', function () {
    this.document.querySelector('.loaded-content').style.display = 'flex';
});
