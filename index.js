/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = items => Array.from(new Set(items));
// const set = new Set();
// for (let i = 0; i < items.length; i += 1) {
//   set.add(items[i]);
// }
// return Array.from(set);


module.exports = removeDuplicateItems;
