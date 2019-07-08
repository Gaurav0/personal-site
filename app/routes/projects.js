import Route from '@ember/routing/route';

export default class ProjectsRoute extends Route {
  @service fastboot;
  titleToken = "Projects";

  model() {
    if (this.fastboot.isFastBoot) {
      return this.store.findAll('project');
    }
    return this.store.peekAll('project');
  }
}
