chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.storage.local.get(['webData'], (result) => {
    let webData = result.webData || [];
    webData.push(message);
    chrome.storage.local.set({webData: webData});
  });

  fetch('https://your-backend-endpoint.com/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  }).catch(error => console.error('Error sending data:', error));
});
