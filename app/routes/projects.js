import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProjectsRoute extends Route {
  @service fastboot;
  titleToken = "Projects";

  model() {
    return this.modelFor('application');
  }
}
