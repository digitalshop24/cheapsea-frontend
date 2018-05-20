import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { RootState } from '@/../types/app';

Vue.use(Vuex);

export default new Store<RootState>({
    state: {
        fitleredOffers: []
    }
})
