# 📄 Mark Print - Markdown to PDF Converter

A simple and elegant web application to convert Markdown documents to PDF with real-time preview.

## ✨ Features

### 🎯 Core Features
- **Markdown Editor**: Clean interface to write or paste markdown code
- **Real-time Preview**: Instant visualization of the result
- **File Upload**: Load .md files directly into the editor
- **PDF Download**: High-quality PDF generation
- **Direct Printing**: Print formatted content
- **Copy HTML**: Copy generated HTML for use in other projects

### 🎨 Visual Features
- **Syntax Highlighting**: Syntax highlighting for code blocks
- **Color Printing**: Preserves background colors and syntax highlighting in print
- **Modern Interface**: Clean and professional design with gradients
- **Smooth Animations**: Transitions and visual effects
- **Dynamic Tooltips**: Contextual tips that change with language
- **Toast Notifications**: Elegant feedback messages

### 🌍 Internationalization
- **3 Languages**: Full support for English, Portuguese and Spanish
- **Auto Detection**: Automatically detects browser language
- **Visual Selector**: Flags for quick language switching
- **Translated Tooltips**: All tooltips change automatically

### 📱 User Experience
- **Responsive**: Works perfectly on desktop and mobile devices
- **Keyboard Shortcuts**: Quick commands for all actions
- **Auto Example**: Loads markdown example when opening the page
- **Visual Feedback**: Toast notifications for all actions

### 🔗 GitHub Integration
- **Compact Button**: Quick access in header
- **Complete Section**: Highlight in footer with message
- **Open Source**: Clear indication of project status

### 📱 Progressive Web App (PWA)
- **Installable**: Can be installed as a native app
- **Offline Support**: Works without internet connection
- **App-like Experience**: Full-screen mode without browser UI
- **Background Sync**: Automatic data synchronization
- **Push Notifications**: Ready for future notification features
- **Fast Loading**: Cached resources for instant access

## 🚀 How to Use

1. **Open the `index.html` file** in your browser
2. **Example loaded automatically** - you'll see a markdown example
3. **Upload** a .md file or **paste/type** your code
4. **View** the result in the preview panel
5. **Use the buttons** for PDF download, printing or copying HTML

## 📱 PWA Installation

### Desktop Installation
1. **Open the application** in Chrome/Edge
2. **Click the install button** in the address bar or header
3. **Confirm installation** when prompted
4. **Access from desktop** like a native app

### Mobile Installation
1. **Open the application** in mobile browser
2. **Tap "Add to Home Screen"** when prompted
3. **Or use browser menu** → "Add to Home Screen"
4. **Launch from home screen** like any app

### Offline Usage
- **Works without internet** after first visit
- **All features available** offline
- **Automatic sync** when connection returns

## ⌨️ Keyboard Shortcuts

- **Ctrl/Cmd + Enter**: Download PDF
- **Ctrl/Cmd + Shift + P**: Print
- **Ctrl/Cmd + Shift + C**: Copy HTML
- **Ctrl/Cmd + O**: Open .md file

## 📁 File Upload

- **Click the upload button** (📤 icon) in the editor
- **Select .md files** from your computer
- **Content loaded automatically** in the editor
- **Visual feedback** confirms the upload

## 📋 Supported Markdown Example

The application supports all standard Markdown elements:

- **Headers**: `# ## ###`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Inline code**: `` `code` ``
- **Code blocks**: ```bash ... ```
- **Lists**: `- item` or `1. item`
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Tables**: `| column | column |`
- **Quotes**: `> text`
- **Horizontal lines**: `---`

## 🛠️ Technologies Used

- **HTML5**: Application structure
- **CSS3**: Modern and responsive styles
- **Vanilla JavaScript**: Functionality without dependencies
- **Marked.js**: Markdown to HTML conversion
- **Highlight.js**: Syntax highlighting for code
- **jsPDF**: PDF generation
- **html2canvas**: Content capture for PDF
- **Font Awesome**: Interface icons
- **Service Worker**: Offline functionality and caching
- **Web App Manifest**: PWA installation support
- **i18n System**: Custom internationalization

## 📁 Project Structure

```
mdprint/
├── index.html          # Main file
├── styles.css          # Application styles
├── script.js           # JavaScript functionality
├── i18n.js             # Internationalization system
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── favicon.png        # App icon
└── README.md          # This file
```

## 🎨 Design Features

- **Modern Interface**: Clean and professional design
- **Attractive Gradient**: Background with purple/blue gradient
- **Smooth Animations**: Transitions and visual effects
- **Clear Typography**: Readable font and visual hierarchy
- **Harmonious Colors**: Consistent color palette
- **Elegant Tooltips**: Contextual tips with animations
- **Toast Notifications**: Non-intrusive feedback system

## 🔧 Customization

You can customize the application by editing:

- **`styles.css`**: Colors, fonts and layout
- **`script.js`**: Functionality and behavior
- **`i18n.js`**: Translations and languages
- **`manifest.json`**: PWA configuration
- **`sw.js`**: Offline behavior and caching
- **`index.html`**: Structure and content

## 📱 Compatibility

- ✅ Chrome/Chromium (PWA support)
- ✅ Firefox (PWA support)
- ✅ Safari (PWA support)
- ✅ Edge (PWA support)
- ✅ Mobile devices (PWA installable)

## 🚀 How to Run

1. Clone or download the files
2. Open `index.html` in your browser
3. Start using!

No dependency installation or web server required.

## 🌍 Supported Languages

The application supports three languages:

- **🇺🇸 English (en)**: Default language
- **🇧🇷 Portuguese (pt)**: Full support
- **🇪🇸 Spanish (es)**: Full support

### Auto Detection

The application automatically detects your browser language and:
- If it's Portuguese, Spanish or English: uses the detected language
- If it's any other language: assumes English as default

### Manual Language Change

You can change the language manually using the flag selector in the top right corner of the application.

## 🧪 Testing Printing

To test if color printing is working correctly:

1. **Example already loaded** - you'll see an example when opening the page
2. **Or upload** a .md file with code
3. **Click "🖨️ Print"** to test printing
4. **Verify** that code blocks maintain their background colors and syntax highlighting

**Note:** Make sure your browser and printer support color printing.

## 📱 PWA Features

### Installation Benefits
- **Native app experience** without browser UI
- **Quick access** from desktop/home screen
- **Offline functionality** for productivity
- **Automatic updates** when available

### Offline Capabilities
- **Full functionality** without internet
- **Cached resources** for fast loading
- **Background sync** when online
- **Seamless experience** across devices

### Performance
- **Fast loading** with cached resources
- **Reduced bandwidth** usage
- **Improved reliability** with offline support
- **Better user experience** with app-like interface

## ⭐ Contributing

If you liked the project:

1. **Give a star** on GitHub using the buttons in the interface
2. **Share** with other developers
3. **Report bugs** or suggestions in the repository

## 📄 License

This project is open source and can be used freely.

---

**Developed with ❤️ to facilitate PDF creation from Markdown**

🔓 **Open Source** - [View on GitHub](https://github.com/souzara/mark-print) 