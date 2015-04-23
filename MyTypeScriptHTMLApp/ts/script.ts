///<reference path="data.ts"/>

module View {
    export module ViewModel {
        import IPerson = DataAccess.IPerson;
        import Processor = View.ViewProcessor.Processor;

        enum SortDirection { Asc, Desc }

        export class MainViewModel {
            private displayedData: IPerson[];
            private sortBy: string;
            private sortDirection: SortDirection;
            constructor(private data: IPerson[], private viewProcessor: Processor) {
                this.displayedData = data;
                this.viewProcessor.displyItems(this.displayedData);
            }
            filter(filterStr: string): void {
                filterStr = filterStr.toLowerCase();
                this.displayedData = this.data.filter(val => val.name.toLowerCase().indexOf(filterStr) === 0);
                this.viewProcessor.displyItems(this.displayedData);
            }
            setSorting(field: string): void {
                if (this.sortBy !== field) {
                    this.sortBy = field;
                    this.sortDirection = SortDirection.Asc;
                } else this.sortDirection = this.sortDirection === SortDirection.Asc ? SortDirection.Desc : SortDirection.Asc;
            }
            sort(field: string): void {
                this.setSorting(field);
                var func = (a, b) => {
                    if (a[field] > b[field]) {
                        return this.sortDirection === SortDirection.Asc ? 1 : -1;
                    }
                    if (a[field] < b[field]) {
                        return this.sortDirection === SortDirection.Asc ? -1 : 1;
                    }
                    return 0;
                };
                this.displayedData = this.displayedData.sort(func);
                this.viewProcessor.displyItems(this.displayedData);
            }
        }
    }
    export module ViewProcessor {
        export class Processor {
            constructor(private pList: HTMLTableSectionElement) {}

            private appendTd<T>(nodeTr, value: T) {
                var nodeTd = document.createElement("TD");
                var textnode = document.createTextNode(value.toString());
                nodeTd.appendChild(textnode);
                nodeTr.appendChild(nodeTd);
            }

            displyItems(items) {
                this.pList.innerHTML = '';
                items.forEach(val => {
                    var nodeTr = document.createElement("TR");
                    this.appendTd(nodeTr, val.name);
                    this.appendTd(nodeTr, val.age);
                    this.pList.appendChild(nodeTr);
                });
            }
        }
    }
}

window.onload = () => {
    var pList = document.getElementById('person-table').getElementsByTagName('tbody')[0];
    var dataProvider = new DataAccess.DataProvider();
    var processor = new View.ViewProcessor.Processor(pList);
    var vm = new View.ViewModel.MainViewModel(dataProvider.getPersonData(), processor);
    document.getElementById('filter-button').onclick = () => {
        var filterStr = (<HTMLInputElement>document.getElementById('filter-input')).value;
        vm.filter(filterStr);
    };
    document.getElementById('full-name-head').onclick = () => {
        vm.sort('name');
    };
    document.getElementById('age-head').onclick = () => {
        vm.sort('age');
    };
}