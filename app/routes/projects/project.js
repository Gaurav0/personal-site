import Route from '@ember/routing/route';
import { schedule } from '@ember/runloop';

export default class ProjectsProjectRoute extends Route {
  titleToken = "Project"

  model(params) {
    return this.store.findRecord('project', {slug: params.slug}).then(function(results) {
      return results.objectAt(0);
    });
  }

  serialize(model) {
    return { slug: model.get('slug') };
  }

  activate() {
    schedule('afterRender', function() {
      document.querySelectorAll('[href="#/projects"]').forEach(function(element) {
        element.classList.add("active");
      });
    });
  }

  deactivate() {
    document.querySelectorAll('[href="#/projects"]').forEach(function(element) {
      element.classList.remove("active");
    });
  }
}
