function sendData(eventData) {
  chrome.runtime.sendMessage(eventData);
}

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    sendData({
      eventType: 'urlChange',
      url: url,
      timestamp: new Date().toISOString()
    });
  }
}).observe(document, {subtree: true, childList: true});

document.addEventListener('click', (event) => {
  sendData({
    eventType: 'click',
    url: location.href,
    position: {x: event.clientX, y: event.clientY},
    timestamp: new Date().toISOString()
  });
});

window.addEventListener('scroll', () => {
  sendData({
    eventType: 'scroll',
    url: location.href,
    scrollPosition: window.scrollY,
    timestamp: new Date().toISOString()
  });
});

let startTime = Date.now();
window.addEventListener('beforeunload', () => {
  const timeSpent = (Date.now() - startTime) / 1000;
  sendData({
    eventType: 'timeSpent',
    url: location.href,
    timeSpent: timeSpent,
    timestamp: new Date().toISOString()
  });
});
