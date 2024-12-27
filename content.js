function showNotification(message, type = 'error') { 
    if (document.getElementById('url-decoder-notification')) {
        return;
    }
    const notification = document.createElement('div');
    notification.id = 'url-decoder-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: ${type === 'error' ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 255, 0, 0.8)'};
        color: white;
        padding: 15px;
        border-radius: 5px;
        z-index: 10000;
        max-width: 300px;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        animation: slide-in 0.3s ease-out;
    `;

    if (!document.getElementById('url-decoder-styles')) {
        const style = document.createElement('style');
        style.id = 'url-decoder-styles';
        style.textContent = `
            @keyframes slide-in {
                from {
                    opacity: 0; 
                    transform: translateX(100%);
                }
                to {     
                    opacity: 1; 
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showError") {
        showNotification(request.message);
    }

    return true;
});