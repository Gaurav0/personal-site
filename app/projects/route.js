import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: "Projects",
    model: function() {
        return this.store.find('project');
    }
});
