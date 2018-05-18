import axios from 'axios';
import { snackbar } from 'vue-mapp/es5/snackbar';
import { Offer, OffersSearchData } from '@/../types/app';

export default class OffersContainer {
    
    page: number = 1;
    total: number = 200;
    processing: boolean = false;
    data: Offer[] = [];

    constructor(private filters: OffersSearchData = {}) {}

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

            snackbar({
                text: e.text || e.message
            })
        }
    }

    async get() {
        const { data, meta } = await this.request();

        this.data = data.map(i => i.attributes);
        this.total = meta.count;
    }

    async append() {
        this.page++;

        const { data, meta } = await this.request();

        this.data = this.data.concat(data.map(i => i.attributes));
        this.total = meta.count;
    }
}
