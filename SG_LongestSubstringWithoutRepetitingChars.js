"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solutionSet = void 0;
var solutionSet = function (s) {
    var maxLength = 0;
    for (var i = 0; i < s.length; i++) {
        var charSet = new Set();
        for (var j = i; j < s.length; j++) {
            if (charSet.has(s[j])) {
                break;
            }
            else {
                charSet.add(s[j]);
            }
        }
        maxLength = Math.max(maxLength, charSet.size);
    }
    return maxLength;
};
exports.solutionSet = solutionSet;
var s = "abcabcbb";
console.log("SOLUTION SET", (0, exports.solutionSet)(s));
