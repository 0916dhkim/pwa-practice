if ("serviceWorker" in navigator) {
  // Register service worker.
  console.log("Registering service worker.");
  navigator.serviceWorker.register('service-worker.js');
} else {
  console.log("Browser does not support service worker.");
}
