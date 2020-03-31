import "./styles/index.scss";
import * as components from "./entry";

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
   
  });
};

if (typeof window.Vue !== "undefined" && window.Vue) {
  install(window.Vue);
  
}
const plugin = {
  install
};


export default plugin

