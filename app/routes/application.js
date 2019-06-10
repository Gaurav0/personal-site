import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    titleToken = "Gaurav Munjal - Embereño"
    title(tokens) {
       return tokens.join(" - ");
    }
}
