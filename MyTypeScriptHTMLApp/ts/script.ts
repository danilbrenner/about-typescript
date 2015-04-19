///<reference path="data.ts"/> //!!!! Added to TS

var data;
var viewedData;
var sortBy = '';
var sortDirection = '';

function filter(filterStr) {
    filterStr = filterStr.toLowerCase();
    viewedData = data.filter(function (val) {
        return val.name.toLowerCase().indexOf(filterStr) === 0;
    });
    showItems(viewedData);
};

function appendTd(nodeTr, value) {
    var nodeTd = document.createElement("TD");
    var textnode = document.createTextNode(value);
    nodeTd.appendChild(textnode);
    nodeTr.appendChild(nodeTd);
}

function showItems(items) {
    var pList = document.getElementById('person-table').getElementsByTagName('tbody')[0];
    pList.innerHTML = '';
    items.forEach(function (val) {
        var nodeTr = document.createElement("TR");
        appendTd(nodeTr, val.name);
        appendTd(nodeTr, val.age);
        pList.appendChild(nodeTr);
    });
}

function sortByName(a, b) {
    if (a.name > b.name) {
        return sortDirection === 'asc' ? 1 : -1;
    }
    if (a.name < b.name) {
        return sortDirection === 'asc' ? -1 : 1;
    }
    return 0;
}

function sortByAge(a, b) {
    if (a.age > b.age) {
        return sortDirection === 'asc' ? 1 : -1;
    }
    if (a.age < b.age) {
        return sortDirection === 'asc' ? -1 : 1;
    }
    return 0;
}

function getSortFunction() {
    if (sortBy === 'fullName') return sortByName;
    if (sortBy === 'age') return sortByAge;
}

function resortBy(field) {
    if (sortBy !== field) {
        sortBy = field;
        sortDirection = 'asc';
    } else sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    var func = getSortFunction();
    if (!func) return;
    viewedData = viewedData.sort(func);
    showItems(viewedData);
};

window.onload = function () {
    data = dataProvider.getPersonData();
    viewedData = data;
    showItems(data);
    document.getElementById('filter-button').onclick = function () {
        var filterStr = document.getElementById('filter-input').nodeValue; //!!!! TS vcalue -> nodeValue
        filter(filterStr);
    };
    document.getElementById('full-name-head').onclick = function () {
        resortBy('fullName');
    };
    document.getElementById('age-head').onclick = function () {
        resortBy('age');
    };
};