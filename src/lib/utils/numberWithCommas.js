// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
/**
 *
 * @param {*} x
 * @returns string with comma/dot after three digit starting from right
 */
export function numberWithCommas(x, separator) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}