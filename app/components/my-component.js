import Component from '@glimmer/component';
import { action, set, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { readOnly } from '@ember/object/computed';

export default class MyComponentComponent extends Component {
  @tracked foo;

  @readOnly('foo') foomacro;

  @readOnly('foogetter') foogettermacro;

  get foogetter() {
    return this.foo;
  }

  @computed('foo')
  get foocp() {
    return this.foo;
  }

  @action
  setFoo() {
    // set(this, 'foo', true);
    this.foo = true;
  }
}
