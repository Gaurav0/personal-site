// app/adapters/application.js
import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import CachedShoe from 'ember-cached-shoe';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend(AdapterFetch, CachedShoe, {
  fastboot: service(),
  host: 'http://localhost:4200',
  namespace: 'api',
  shouldBackgroundReloadRecord() { return false; },
  shouldBackgroundReloadAll() { return false; },
  shouldReloadRecord() { return true; },
  shouldReloadAll() { return true; }
});
