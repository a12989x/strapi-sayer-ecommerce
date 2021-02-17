"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // find: (ctx) => {
  //     return strapi.query('poduct').find(ctx.query, ["items"])
  // },
  findOne: (ctx) => {
    return strapi.query("product").findOne(ctx.query, ["info", "items"]);
  },
};
