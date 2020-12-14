/**
    The Composite Pattern describes a group of objects that can be treated in the same
    way a single instance of an object may be. Implementing this pattern allows you to treat
    both individual objects and compositions in a uniform manner.
 */

var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);

var group_food = new CatalogGroup("Food for while you try on clothes", [
    new CatalogItem("Milkshake", 5.99),
    new CatalogItem("French Fries", 3.99)
]);

var keychain = new CatalogItem("Key Chain", .99);

var catalog = new CatalogGroup("Clothes and Food", [keychain, group_shoes, group_food]);

console.log(`$${catalog.total}`);

catalog.print();
