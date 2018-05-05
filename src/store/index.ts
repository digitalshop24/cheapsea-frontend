import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import menu from './menu';
import { RootState } from '../core/types';

Vue.use(Vuex);

export default new Store<RootState>({
    state: {
        title: '',
        subtitle: '',
        layout: {},
        menu
    },
    mutations: {
        updateTitle(state, data: string[] | string) {
            let title = '', subtitle = '';

            if (data instanceof Array) {
                title = data[0];
                subtitle = data[1];
            } else {
                title = data;
            }

            state.title = title;
            state.subtitle = subtitle;
        }
    }
})
