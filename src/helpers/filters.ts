import dict from './dict.json';
import { pad } from './parse';

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

        const hours = pad(date.getHours(), 2, '0');
        const minutes = pad(date.getMinutes(), 2, '0');

        return `${hours}:${minutes}`;
    })
}