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

Vue.filter('truncate', function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
});