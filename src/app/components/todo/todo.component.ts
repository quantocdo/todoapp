import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  inputTask : string = '';
  changeTask : string = '';
  filterStatus : string = 'all';
  isShowBtn : boolean = true;
  isShowField : boolean = true;
  isSearchField : boolean = false;
  inputSearch : string;

  arrTasks : any[] = [];

  constructor() {

  }

  ngOnInit() {
    var todoData = localStorage['item'];

    if(todoData !== undefined){
      this.arrTasks = JSON.parse(todoData);
    }
  }

  addTask() {
    this.arrTasks.unshift({ //unshift place new item to top position of array
      id: this.arrTasks.length + 1,
      task: this.inputTask,
      completed: false,
      editable: false
    });

    localStorage.setItem('item', JSON.stringify(this.arrTasks));

    this.inputTask = ''; //clear input field when finishing adding item by pressing Enter
  }

  editTask(id: number){
    var title = this.arrTasks.filter(function(element) {
       return element.id === id
    });
    var result : string = prompt("Edit Task Title", title[0].task);
    if (result !== null && result !== ""){
      title[0].task = result;
    }

    localStorage.setItem('item', JSON.stringify(this.arrTasks));
  }

  removeTask(id: number) {
    const index = this.arrTasks.findIndex(e => e.id === id);
    this.arrTasks.splice(index, 1);
    localStorage.setItem('item', JSON.stringify(this.arrTasks));
  }

  filterTasks(completed: boolean) {
    const all = this.filterStatus === 'all';
    const active = this.filterStatus === 'active' && !completed;
    const finished = this.filterStatus === 'finished' && completed;

    return all || active || finished;
  }

  isCompletedSignal(id: boolean) {
    var signal = this.arrTasks.filter(function(element) {
      return element.id === id
    });
    signal[0].completed = !signal[0].completed;

    localStorage.setItem('item', JSON.stringify(this.arrTasks));
  }

  selectAll() {
    for (var item of this.arrTasks) {
      item.completed = true;
    }
    this.isShowBtn = !this.isShowBtn;
    localStorage.setItem('item', JSON.stringify(this.arrTasks));
  }

  unSelectAll() {
    for (var item of this.arrTasks) {
      item.completed = false;
    }
    this.isShowBtn = !this.isShowBtn;
    localStorage.setItem('item', JSON.stringify(this.arrTasks));
  }

  clearCompleted() {
    this.arrTasks = this.arrTasks.filter(function(element) {
      if (element.completed) {
        return false;
      } else {
        return true;
      }
    });
  }

  clearBtnText() {
    var isShowClearBtn : boolean = false;
    for (var item of this.arrTasks) {
      if (item.completed) {
        isShowClearBtn = true;
      }
    }
    if (isShowClearBtn) {
      return true;
    } else {
      return false;
    }
  }

  isActiveItemLeft() {
    var numberLeft : number = 0;
    for (var item of this.arrTasks) {
      if (!item.completed) {
        numberLeft = numberLeft + 1;
      }
    }
    return numberLeft;
  }

  isCorrectText() {
    var numberLeft : number = 0;
    for (var item of this.arrTasks) {
      if (!item.completed) {
        numberLeft = numberLeft + 1;
      }
    }
    if (numberLeft > 1) {
      return 'items';
    } else {
      return 'item';
    }
  }

  isTaskbar() {
    var numberItem : number = 0;
    for (var item of this.arrTasks) {
      if (item) {
        numberItem = numberItem + 1;
      }
    }
    if (numberItem == 0) {
      return true;
    }
  }

  toggleField() {
    this.isShowField = !this.isShowField;
  }
}
