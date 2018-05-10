import { Location } from 'vue-router';

export interface InitParams {

}

export interface RootState {
    title: string;
    subtitle: string;
    menu: MenuItem[];
    fitleredOffers: any[];
    searchData: any;
}

export interface MenuItem {
    title: string;
    route: Location;
    icon?: string;
}
