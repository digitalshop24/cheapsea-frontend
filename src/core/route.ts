import { Vue, Component, Watch } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component
export default class RoutePage extends Vue {

    title: string = '';
    subtitle: string = '';

    @Mutation updateTitle;

    get routeTitle(): [string, string] {
        return [this.title, this.subtitle];
    }

    @Watch('routeTitle')
    updateRouteTitle(value) {
        this.updateTitle(value);
    }

    beforeRouteEnter(to, from, next) {

        next((vm: RoutePage) => {
            vm.updateTitle([vm.title, vm.subtitle])
        });
    }
}
