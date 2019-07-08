// app/adapters/application.js
import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import CachedShoe from 'ember-cached-shoe';

export default DS.JSONAPIAdapter.extend(AdapterFetch, CachedShoe, {
  host: 'https://localhost:4200',
  namespace: 'api',
  shouldBackgroundReloadRecord() { return false; },
  shouldBackgroundReloadAll() { return false; },
  shouldReloadRecord() { return false; },
  shouldReloadAll() { return false; }
});
