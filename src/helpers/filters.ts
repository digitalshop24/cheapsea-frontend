import { pad } from './parse';
import acc from 'accounting';
import dict from './dict.json';

export default function(Vue) {

    Vue.filter('dateWeek', function (value) {
        if (!value) return ''

        const date = new Date(value);

        const day = pad(date.getDate(), 2, '0');
        const month = dict.month[date.getMonth()][1].slice(0, 3);
        const year = date.getFullYear();
        const weekday = dict.weekday[date.getDay()][1];

        return `${day} ${month} ${year}, ${weekday}`;
    });

    Vue.filter('time', function(value) {

        if (!value) return '';

        const date = new Date(value);
        const hours = pad(date.getUTCHours(), 2, '0');
        const minutes = pad(date.getUTCMinutes(), 2, '0');

        return `${hours}:${minutes}`;
    });

    Vue.filter('money', function(value) {
        
        return acc.formatMoney(value, "", 0, " ", ""); // €4.999,99
    });

    Vue.filter('json', function (obj, attrName) {
        let value = '';

        if (obj) {
            const attrs = obj.data && obj.data.attributes;

            if (attrs) {
                value = attrs[attrName];
            }
        }

        return value;
    });
}
