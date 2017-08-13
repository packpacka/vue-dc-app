import * as Vue from 'vue';
import * as Vuex from 'vuex';
import Component from 'vue-class-component';
import { store } from "../../store/store";


@Component({
  store,
  template: require('./map.component.tpl'),
})
export class MapComponent extends Vue {
  public store = store;
}