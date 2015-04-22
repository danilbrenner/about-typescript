
var data;
var displayedData;
var sortBy = '';
var sortDirection = '';

function filter(filterStr) {
    filterStr = filterStr.toLowerCase();
    displayedData = data.filter(function (val) {
        return val.name.toLowerCase().indexOf(filterStr) === 0;
    });
    showItems(displayedData);
};

function setSorting(field) {
    if (sortBy !== field) {
        sortBy = field;
        sortDirection = 'asc';
    } else sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
}

function sort(field) {
    setSorting(field);
    var func = function (a, b) {
        if (a[field] > b[field]) {
            return sortDirection === 'asc' ? 1 : -1;
        }
        if (a[field] < b[field]) {
            return sortDirection === 'asc' ? -1 : 1;
        }
        return 0;
    };
    displayedData = displayedData.sort(func);
    showItems(displayedData);
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

window.onload = function () {
    data = dataProvider.getPersonData();
    displayedData = data;
    showItems(data);
    document.getElementById('filter-button').onclick = function () {
        var filterStr = document.getElementById('filter-input').value;
        filter(filterStr);
    };
    document.getElementById('full-name-head').onclick = function () {
        sort('name');
    };
    document.getElementById('age-head').onclick = function () {
        sort('age');
    };
};