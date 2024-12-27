# URL Decoder Chrome Extension

## Overview

URL Decoder is a simple Chrome extension that allows you to quickly decode and open encoded URLs directly from any webpage with just a right-click.

## Features

- 🔍 Decode URL-encoded text
- 🌐 Open decoded URLs in a new tab
- 🖱️ Easy right-click context menu
- 🚨 Error notifications for invalid URLs

## Installation

### From Chrome Web Store (Recommended)
*Note: Not yet published*

### Manual Installation

1. Download the extension files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the extension directory

## Usage

1. Select an encoded URL on any webpage
2. Right-click on the selected text
3. Choose "Decode and Open URL" from the context menu
4. The extension will:
   - Decode the URL
   - Open a new tab with the decoded URL
   - Show an error notification if decoding fails

### Example

**Encoded URL:**
```
https%3A%2F%2Fwww.example.com%2Fpath%3Fquery%3Dvalue
```

**Decoded URL:**
```
https://www.example.com/path?query=value
```

## Supported URL Formats

- Standard URL encoding
- Plus sign (`+`) replacement
- Special character encoding

## Troubleshooting

### Common Issues
- Ensure the selected text is a valid encoded URL
- Check that the URL can be successfully decoded
- Verify the extension is enabled in Chrome extensions

### Error Messages
- "Invalid URL": The decoded string is not a valid web address
- "Could not decode URL": The text cannot be URL-decoded

## Privacy

- No data is stored or transmitted
- Works entirely client-side
- Requires minimal permissions

## Contributing

### Reporting Issues
1. Check existing issues
2. Provide detailed description
3. Include steps to reproduce

### Development
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a pull request

## Technologies

- JavaScript
- Chrome Extension API
- Manifest V3

## License

[MIT License](LICENSE)

---

**Happy URL Decoding! 🔓🌐**