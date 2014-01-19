var route = Ember.Route.extend({
  model: function(){
    this.store.unloadAll('task');
    return this.store.findQuery('task', {'status': 'pending'});
  },
  afterModel: function(tasks, transition) {
    if (tasks.get('length') === 0) {
      this.transitionTo('getting_started');
    } else if (transition.targetName == "task.index") {
      this.transitionTo('task', tasks.get('firstObject'));
    }
  }
});

module.exports = route;
