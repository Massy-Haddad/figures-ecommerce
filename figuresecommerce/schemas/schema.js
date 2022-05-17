import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import product from "./product";
import work from "./work";
import manufactor from "./manufactor";
import banner from "./banner";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([product, work, manufactor, banner]),
});
