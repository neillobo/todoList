class window.TodoView extends Backbone.View
  tagName: 'li'

  initialize: ->
    do @render

  render: ->
    @$el.html(@model.get 'title')

