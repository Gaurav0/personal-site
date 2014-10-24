import Ember from 'ember';

export default Ember.Route.extend({
    titleToken: "Gaurav Munjal - Embereño",
    title: function(tokens) {
       return tokens.join(" - ");
    }
});
