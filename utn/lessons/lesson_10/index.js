var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
;
var workedDays = [Days.Monday];
var addDay = function (myDays) {
    var days = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        days[_i - 1] = arguments[_i];
    }
    console.log.apply(console, days);
    return myDays.push.apply(myDays, days);
};
console.log(workedDays);
console.log(addDay(workedDays, Days.Tuesday, Days.Wednesday, Days.Thursday));
console.log(workedDays);
