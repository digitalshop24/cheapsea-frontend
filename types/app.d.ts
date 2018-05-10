
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
