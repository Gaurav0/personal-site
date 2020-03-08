import CachedShoeService from 'ember-cached-shoe/service';

export default CachedShoeService.extend({
  eraseResponse() {
    // do not erase
  },

  tokenizeAjaxRequest(url, type, options = {}) {
    return this._super('', type, options);
  }
});
