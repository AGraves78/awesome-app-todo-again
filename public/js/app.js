/* jshint esversion: 6*/
const TodoApp = {
  rootElement: '#app',
  todos: []
  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.addButton = this.root.querySelector('.add-button');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
  },
  bindEvents: function(){
    this.addButton.addEventListener('click', () => this.addTodo());
  },
  render: function(){
    
  }
};
TodoApp.start();
