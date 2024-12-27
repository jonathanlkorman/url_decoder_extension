chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "decodeAndOpenURL",
        title: "Decode and Open URL",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "decodeAndOpenURL") {
        const encodedURL = info.selectionText.trim();
        try {
            const decodedURL = decodeURIComponent(encodedURL.replace(/\+/g, " "));
            if (isValidURL(decodedURL)) {
                chrome.tabs.create({ url: decodedURL });
            } else {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    files: ['content.js']
                }).then(() => {         
                    chrome.tabs.sendMessage(tab.id, {
                        action: "showError",
                        message: "Invalid URL: " + decodedURL
                    });
                });
            }
        } catch (error) {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['content.js']
            }).then(() => {      
                chrome.tabs.sendMessage(tab.id, {
                    action: "showError",
                    message: "Could not decode URL"
                });
            });
        }
    }
});

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}