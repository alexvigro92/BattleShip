import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

var dataLocal = [[], [], [], [], [], [], [], [], [], [], []];
var dataForeign = [[], [], [], [], [], [], [], [], [], [], []];
var dataForeignResult = [12,100, 97,96,95,55,38,49,64,65,20,21];
var col = 0;
var row = 0;
var cont = 0;
var cont2 = 0;
var cont3 = 65;
var char = '';

for (col = 0; col < 11; col++) {
  for (row = 0; row < 11; row++) {
    if(col == 0 && row != 0){
      cont2++;
      dataLocal[col][row] = { 'id': cont, 'val': cont2,'color': '#e4eaf0', 'fixed': 1};
      dataForeign[col][row] = { 'id': cont, 'val': cont2,'color': 'black', 'space': ' ', 'bomb':'large','hidden':1, 'fixed': 1};
    }
    else if(row == 0 && col != 0){
      char = String.fromCharCode(cont3);
      dataLocal[col][row] = { 'id': cont, 'val': char,'color': '#e4eaf0', 'fixed': 1};
      dataForeign[col][row] = { 'id': cont, 'val': char,'color': 'black', 'space': ' ', 'bomb':'large','hidden':1, 'fixed': 1};
      cont3++;
    }else if(col == 0 && row == 0){
      dataLocal[col][row] = { 'id': cont, 'val': '','color': '#e4eaf0', 'fixed': 1};
      dataForeign[col][row] = { 'id': cont, 'val': '','color': 'black', 'space': ' ', 'bomb':'large','hidden':1, 'fixed': 1};
    }else{
      dataLocal[col][row] = { 'id': cont, 'val': '','color': '#e4eaf0', 'fixed': 0};
      dataForeign[col][row] = { 'id': cont, 'val': '','color': 'black', 'space': ' ', 'bomb':'large','hidden':1, 'fixed': 0};
    }
    cont++;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('zoomOut',[
      state('large',style({
        transform: 'scale(15)'
      })),
      state('small',style({
        
        transform: 'scale(1)'
      })),
      transition('large <=> small', animate('1s ease-in')),
    ])
  ]

})

export class AppComponent {

  public newData = () => {
    for (col = 0; col < 11; col++) {
      for (row = 0; row < 11; row++) {
          dataLocal[col][row].color = '#e4eaf0';
          dataForeign[col][row].bomb = 'large';
          dataForeign[col][row].hidden = 1;
      }
    }
  }

  public putShip = (id,fixed) => {
    if (id.color == '#e4eaf0' && fixed != 1) {
      id.color = '#a8da61';
    }
  }

  public getId = (id,fixed) => {
    if (id.bomb == 'large' && fixed != 1) {
      id.bomb = 'small';
      id.hidden = 0;
    }
    if(-1 != dataForeignResult.indexOf(id.id)){
      id.color = 'red';
    }
  }

  DataLocal = dataLocal;
  DataForeign = dataForeign;
}
