"use strict";
window.addEventListener('DOMContentLoaded', function () {

    const linksWrapperAll = this.document.querySelectorAll('.links-wrapper');
    const linkWrapperAll = this.document.querySelectorAll('.link-wrapper');
    const changes = this.document.querySelectorAll('.change');

    const cities = ['Andijon', 'Buxoro', 'Fargona', 'Jizzax', 'Xorazm', 'Namangan', 'Navoiy', 'Qarshi', 'Nukus', 'Samarqand', 'Sirdaryo', 'Surxondaryo', 'Toshkent'];

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
                url.searchParams.set('turi', 'Hayvon');
                window.history.pushState({}, '', url);
                window.location.reload();
                return false;
            } else {
                url.searchParams.set('turi', 'Osimlik');
                window.history.pushState({}, '', url);
            }
        });
    });
});

window.addEventListener('load', function () {
    this.document.querySelector('.loaded-content').style.display = 'flex';
});
