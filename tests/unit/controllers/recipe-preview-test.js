import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | recipe-preview', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:recipe-preview');
    assert.ok(controller);
  });
});
