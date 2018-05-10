import axios from 'axios';
import { Offer } from '@/../types/app';

export default class Offers {
    
    page: number = 1;
    total: number = 200;
    processing: boolean = false;
    data: Offer[] = [];

    constructor(private filters: object = {}) {}

    private get filterString() {
        const { filters } = this;

        return Object.keys(filters).filter(prop => {
            return !!filters[prop];
        }).map(prop => {
            return `${prop}=${filters[prop]}`
        }).join('&');
    }

    private async request() {
        const { filterString, page } = this;
        const uri = `/offers?${filterString}&page=${page}`;

        try {
            this.processing = true;
            const { data } = await axios.get(uri);

            this.processing = false;
            return data;
        } catch (e) {
            this.processing = false;
        }
    }

    async get() {
        this.data = await this.request();
    }

    async append() {
        this.page++;

        const newOffers = await this.request();

        this.data = this.data.concat(newOffers);
    }
}
