function runner(fn) {
  return function(e) {
    var args = e.data || [];
    return Promise.resolve(fn(...args))
      .then(function(x) {
        postMessage([true, x]);
      })
      .catch(function(x) {
        postMessage([false, x]);
      });
  };
}

export default runner;
