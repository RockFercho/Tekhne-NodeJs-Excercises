let moment = require('moment');

const defaultDateFormat = 'YYYY-MM-DD';

let converStringToDate = function(stringDate) {
    return moment(stringDate, defaultDateFormat);
}

module.exports = {
    converStringToDate
};