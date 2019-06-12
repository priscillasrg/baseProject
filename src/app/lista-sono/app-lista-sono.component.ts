import { Component } from "@angular/core";

@Component({
    selector: 'app-lista-sono',
    templateUrl: './app-lista-sono.component.html',
    styleUrls: ['./app-lista-sono.component.css']
})

export class AppListaSonoComponent{

people: any[] = [
    {
        age: 2,
        name: 'Kevin',
        level: 'P'
    },
    {
        age: 30,
        name: 'Priscilla',
        level: 'G'
    },
    {
        age: 5,
        name: 'Agatha',
        level: 'G'
    },
    {
        age: 4,
        name: 'Cristal',
        level: 'M'
    },
    {
        age: 3,
        name: 'Pantera',
        level: 'P'
    },
    {
        age: 50,
        name: 'Joana',
        level: 'D'
    },
]

}