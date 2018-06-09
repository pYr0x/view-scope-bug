import DefineMap from "can-define/map/";
import "can-stache-bindings";

const AppViewModel = DefineMap.extend({
  message: {
    serialize: false,
    default: "Hello World!"
  }
});

export default AppViewModel;
