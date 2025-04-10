import MicroModal from "micromodal";

console.log("Initializing Larsa Blazor JS");

window.LarsaComponents = {
  initMicroModal: function (options = {}) {
    MicroModal.init(options);
    console.log("MicroModal initialized with options:", options);
  },
};
