class window.TodoListView extends Backbone.View
  collection: TodoModel
  tagName: 'ul'
  initialize: ->
    do @render

  render: ->
    console.log @collection
    _.each @collection, (todoModel) ->
      @$el.append new TodoView(model: todoModel)

    $('body').append(@$el)
