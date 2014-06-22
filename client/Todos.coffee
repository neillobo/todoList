class window.TodoList extends Backbone.Collection
  model: TodoModel

  initialize: (todos) ->
    i =0
    while i<todos.length
      @add todos[i]
      i++
