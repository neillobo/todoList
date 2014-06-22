// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.TodoList = (function(_super) {
    __extends(TodoList, _super);

    function TodoList() {
      return TodoList.__super__.constructor.apply(this, arguments);
    }

    TodoList.prototype.model = TodoModel;

    TodoList.prototype.initialize = function(todos) {
      var i, _results;
      i = 0;
      _results = [];
      while (i < todos.length) {
        this.add(todos[i]);
        _results.push(i++);
      }
      return _results;
    };

    return TodoList;

  })(Backbone.Collection);

}).call(this);

//# sourceMappingURL=Todos.map
