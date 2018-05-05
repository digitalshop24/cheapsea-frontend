export function pad(str: string | number, len: number, padString: string) {
    len = len >> 0;
    padString = String(padString || ' ');
    str = String(str);

    if (str.length > len) {
        return str;
    }

    len = len - str.length;

    if (len > padString.length) {
        // @ts-ignore
        padString += padString.repeat(len / padString.length);
    }

    return padString.slice(0, len) + str;
}