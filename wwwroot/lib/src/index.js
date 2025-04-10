import MicroModal from "micromodal";

console.log("Initializing Larsa Blazor JS");

window.LarsaComponents = {
  initMicroModal: function (options = {}) {
    MicroModal.init(options);
  },
  openModal: function (modalId, service, options = {}) {
    MicroModal.show(modalId, {
      ...options,
      onShow: () => {
        service.invokeMethodAsync("HandleOnOpen");
      },
      onClose: () => {
        service.invokeMethodAsync("HandleOnClose");
      },
    });
  },
  closeModal: function (modalId, service) {
    MicroModal.close(modalId);
  },
};
