"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMinutesBetweenDates = getMinutesBetweenDates;
function getMinutesBetweenDates(startDate, endDate) {
  if (startDate && endDate) {
    const diff = endDate.getTime() - startDate.getTime();
    return diff / 60000;
  }
  return 0;
}