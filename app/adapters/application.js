// app/adapters/application.js
import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import CachedShoe from 'ember-cached-shoe';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend(CachedShoe, AdapterFetch, {
  fastboot: service(),
  host: 'http://localhost:4200',
  namespace: 'api',
  shouldBackgroundReloadRecord() { return false; },
  shouldBackgroundReloadAll() { return false; },
  shouldReloadRecord() { return this.fastboot.isFastBoot; },
  shouldReloadAll() { return this.fastboot.isFastBoot; }
});
