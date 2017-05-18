import Ember from 'ember';

export function dateformat([date]) {
  if (date && date.getFullYear) {
    var r = date.getFullYear() + ". " + (date.getMonth() + 1) + ". " + date.getDate() + ". ";
    r += (date.getHours() < 10) ? "0" + date.getHours() : date.getHours();
    r += ":";
    r += (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    return r;
  }
  return "";
}

export default Ember.Helper.helper(dateformat);
