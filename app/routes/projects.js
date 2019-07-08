import Route from '@ember/routing/route';

export default class ProjectsRoute extends Route {
  titleToken = "Projects"

  model() {
    return this.store.loadAll('project');
  }
}
