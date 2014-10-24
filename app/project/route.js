import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: "Project",
    model: function(params) {
        return this.store.find('project', {slug: params.slug}).then(function(results) {
            return results.objectAt(0);
        });
    },

    serialize: function(model) {
        return { slug: model.get('slug') };
    },

    activate: function() {
        Ember.run.schedule('afterRender', function() {
            Ember.$('[href="#/projects"]').addClass("active");
        });
    },

    deactivate: function() {
        Ember.$('[href="#/projects"]').removeClass("active");
    }
});
