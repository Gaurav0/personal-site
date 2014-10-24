import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('projects');
    this.resource('project', { path: 'projects/:slug' });
    this.route('resume');
});

export default Router;
