///<reference path="data.ts"/> //!!!! Added to TS

module MainModule {

    import IPerson = DataAccess.Interfaces.IPerson;

    export class SortBy {
        static name = 'name';
        static age = 'age';
    }

    enum SortDirection {
        Asc,
        Desc
    }

    export class MainViewModel {
        private viewedData: IPerson[];

        get visibleItems(): IPerson[] {
            return this.viewedData;
        }

        private sortBy: string;
        private sortDirection: SortDirection;

        constructor(private data: IPerson[]) {
            this.viewedData = this.data;
        }

        filter(filterStr: string): void {
            filterStr = filterStr.toLowerCase();
            this.viewedData = this.data.filter((val: IPerson): boolean => {
                return val.name.toLowerCase().indexOf(filterStr) === 0;
            });
        }

        resortBy(field: string): void {
            if (this.sortBy !== field) {
                this.sortBy = field;
                this.sortDirection = SortDirection.Asc;
            } else this.sortDirection = this.sortDirection === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc;

            this.viewedData = this.viewedData.sort((a: IPerson, b: IPerson) => {
                if (a[field] > b[field]) {
                    return this.sortDirection === SortDirection.Asc ? 1 : -1;
                }
                if (a[field] < b[field]) {
                    return this.sortDirection === SortDirection.Asc ? -1 : 1;
                }
                return 0;
            });
        }
    }

    export class Binder {
        constructor(private pList: HTMLTableSectionElement) {
        }

        private appendTd<T>(nodeTr: HTMLElement, value: T): void {
            var nodeTd = document.createElement("TD");
            var textnode = document.createTextNode(value.toString());
            nodeTd.appendChild(textnode);
            nodeTr.appendChild(nodeTd);
        }

        showItems(items: IPerson[]): void {
            this.pList.innerHTML = '';
            items.forEach((val: IPerson): void => {
                var nodeTr = document.createElement("TR");
                this.appendTd<string>(nodeTr, val.name);
                this.appendTd(nodeTr, val.age);
                this.pList.appendChild(nodeTr);
            });
        }
    }
}

import DataProvider = DataAccess.DataProvider;

window.onload = () => {
    var dataProvider = new DataProvider();
    var data = dataProvider.getPersonData();
    var vm = new MainModule.MainViewModel(data);
    var pList = document.getElementById('person-table').getElementsByTagName('tbody')[0];
    var binder = new MainModule.Binder(pList);
    binder.showItems(vm.visibleItems);
    document.getElementById('filter-button').onclick = () => {
        var filterStr = (<HTMLInputElement>document.getElementById('filter-input')).value; //!!!! TS vcalue -> nodeValue
        vm.filter(filterStr);
        binder.showItems(vm.visibleItems);
    };
    document.getElementById('full-name-head').onclick = () => {
        vm.resortBy(MainModule.SortBy.name);
        binder.showItems(vm.visibleItems);
    };
    document.getElementById('age-head').onclick = () => {
        vm.resortBy(MainModule.SortBy.age);
        binder.showItems(vm.visibleItems);
    };
};