export default function clearAllTimeOuts() {
  var timeOuts = window.setTimeout(function() {}, 0);
  while (timeOuts--) {
      window.clearTimeout(timeOuts); // will do nothing if no timeout with id is present
  }
}