
type Dictionary<T> = { [key: string]: T };

export type OfferType =
    | 'airplane'
    | 'trane'
    | 'bus'
    | 'car_rent'
    ;

export type DiscountType =
    | 'hot'
    | 'seasonal'
    | 'erroneous'
    | 'other'
    ;

export interface Offer {
    page: number;
    offer_type: OfferType;
    discount_type: DiscountType;
    airline_id: string;
    transfers_count: number;
    date_from: string;
    date_to: string;
    date_end: string;
    price: string;
    price_currency: number;
    discount_rate: number;
    description: string;
    two_sides: number;
}

export interface OffersSearchData {
    origin_id?: number | string;
    destination_id?: number | string;
    offer_Type?: string;
    dateFrom?: string;
    dateTo?: string;
}

export interface RootState {
    fitleredOffers: any[];
    screen: string;
    layout: any;
}
