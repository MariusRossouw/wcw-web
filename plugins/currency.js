import Vue from 'vue'

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    // en-ZA USD
    // en-ZA EUR
    var formatter = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});
