import Route from '@ember/routing/route';
import { schedule } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default class ProjectsProjectRoute extends Route {
  @service fastboot;
  titleToken = "Project";

  model(params) {
    return this.modelFor('application').toArray().find(project =>
      project.slug === params.slug
    );
  }

  serialize(model) {
    return { slug: model.get('slug') };
  }

  activate() {
    if (!this.fastboot.isFastBoot) {
      schedule('afterRender', () => {
        document.querySelectorAll('[href="#/projects"]').forEach(function(element) {
          element.classList.add("active");
        });
      });
    }
  }

  deactivate() {
    if (!this.fastboot.isFastBoot) {
      document.querySelectorAll('[href="#/projects"]').forEach(function(element) {
        element.classList.remove("active");
      });
    }
  }
}
