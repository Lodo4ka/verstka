var calculateDeposit = function(
    startDeposit,
    percentAtYear,
    period,
    isCapitalization
) {
    var summary;
    if (isCapitalization === true) {
        for (var i = 0; i <= period; i++) {
            startDeposit += percentAtYear / 12 * startDeposit;
        }
        summary = startDeposit;
        return Math.round(summary);
    }
    return Math.round(percentAtYear / 12 * period * startDeposit);
};

calculateDeposit(100000, 0.12, 1, false);