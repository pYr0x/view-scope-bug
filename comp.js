import Component from "can-component";
import DefineMap from "can-define/map/";


export const ViewModel = DefineMap.extend({
  app:  "any"
});

export default Component.extend({
  tag: "x-comp",
  view: `hello`,
  ViewModel
});