"use strict";
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"] === 0);
console.log(Days["Mon"] === 1);
console.log(Days["Tue"] === 2);
console.log(Days["Sat"] === 6);
console.log(Days[0] === "Sun");
console.log(Days[1] === "Mon");
console.log(Days[2] === "Tue");
console.log(Days[6] === "Sat");
