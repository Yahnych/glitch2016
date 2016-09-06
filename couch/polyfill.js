if (!Math.log2) {
    Math.log2 = function (x) {
        return Math.log(x) / Math.LN2
    }
}

if (!Math.log10) {
    Math.log10 = function (x) {
        return Math.log(x) / Math.LN10
    }
}