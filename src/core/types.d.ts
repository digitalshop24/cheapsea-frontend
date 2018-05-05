import { Location } from 'vue-router';
import { VueMappLayout } from 'vue-mapp/es6/layout';

export interface InitParams {

}

export interface RootState {
    title: string;
    subtitle: string;
    menu: MenuItem[];
    layout: VueMappLayout;
}

export interface MenuItem {
    title: string;
    route: Location;
    icon?: string;
}
