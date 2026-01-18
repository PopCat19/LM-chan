console.log('LM-chan background service worker initialized');

chrome.runtime.onInstalled.addListener(() => {
  console.log('LM-chan extension installed');
});
