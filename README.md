# Web Interaction Tracker
## Overview
Web Interaction Tracker is a browser extension designed to monitor and log user interactions on web pages. The extension captures key events such as URL changes, clicks, scrolls, and the time spent on each page. Users can export the collected data as a CSV file through a simple popup interface.

## Features
URL Change Detection: Tracks when the user navigates to a new URL on the same page.
Click Tracking: Captures click events, including the position of the click on the page.
Scroll Tracking: Logs the vertical scroll position as the user scrolls through the page.
Time Spent Monitoring: Records the total time spent on each web page.
Data Export: Allows users to export the collected interaction data as a CSV file.
## Installation
Clone or download this repository.
Open your web browser and go to the extensions page:
Chrome: chrome://extensions/
Firefox: about:addons
Enable "Developer mode" (for Chrome).
Click on "Load unpacked" and select the directory containing the extension files.
The Web Interaction Tracker extension should now be visible in your extensions list.
## Usage
Automatic Tracking: The extension automatically starts tracking user interactions as soon as it’s installed.
Data Export: Click on the extension icon in your browser’s toolbar, and then click the "Export Data" button to download the tracked data as a CSV file.
## Exported Data Format
The exported CSV file will include the following columns:

eventType: Type of event (e.g., urlChange, click, scroll, timeSpent).
url: The URL of the web page where the event occurred.
timestamp: The exact time when the event was recorded.
position: The X and Y coordinates of the click event (if applicable).
scrollPosition: The vertical scroll position (if applicable).
timeSpent: Time spent on the page before leaving (if applicable).
## Manifest File
manifest_version: 3
name: Web Interaction Tracker
version: 1.0
description: Tracks user interactions on a web page.
permissions: storage, activeTab, webNavigation
background: Runs a service worker background.js to handle background tasks.
content_scripts: Injects content.js into all URLs.
action: Provides a popup (popup.html) with an export button.
icons: Uses icons/icons16.png for the extension icon.
## Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
