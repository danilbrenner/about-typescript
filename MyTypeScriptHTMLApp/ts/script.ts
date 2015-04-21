///<reference path="data.ts"/> //!!!! Added to TS

import dataEx = DataAccess;
import dataExI = DataAccess.Interfaces;

class SortDirection {
    static name = 'name';
    static age = 'age';
}

var data: Array<dataExI.IPerson>;
var viewedData: Array<dataExI.IPerson>;
var sortBy: SortDirection;
var sortDirection: string;

function filter(filterStr: string): void {
    filterStr = filterStr.toLowerCase();
    viewedData = data.filter((val: dataExI.IPerson): boolean => {
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
    items.forEach((val: dataExI.IPerson): void => {
        var nodeTr = document.createElement("TR");
        appendTd(nodeTr, val.name);
        appendTd(nodeTr, val.age);
        pList.appendChild(nodeTr);
    });
}

function resortBy(field: string) {
    if (sortBy !== field) {
        sortBy = field;
        sortDirection = 'asc';
    } else sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';

    viewedData = viewedData.sort((a: dataExI.IPerson, b: dataExI.IPerson) => {
        if (a[field] > b[field]) {
            return sortDirection === 'asc' ? 1 : -1;
        }
        if (a[field] < b[field]) {
            return sortDirection === 'asc' ? -1 : 1;
        }
        return 0;
    });
    showItems(viewedData);
};

window.onload = () => {
    
    var dataProvider = new dataEx.DataProvider();
    data = dataProvider.getPersonData();
    viewedData = data;
    showItems(data);
    document.getElementById('filter-button').onclick = () => {
        var filterStr = document.getElementById('filter-input').nodeValue; //!!!! TS vcalue -> nodeValue
        filter(filterStr);
    };
    document.getElementById('full-name-head').onclick = () => {
        resortBy(SortDirection.name);
    };
    document.getElementById('age-head').onclick = () => {
        resortBy(SortDirection.age);
    };
};