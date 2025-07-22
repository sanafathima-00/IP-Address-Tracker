# **IP Address Tracker**



## 🌍 Project Overview

A simple yet powerful tool that allows users to track and visualize any IP address. With just an input, the tracker fetches location, ISP, and timezone details, and displays them on an interactive map.

---

## ✨ Features

- 🔍 Search for any IP address
- 🌐 View ISP, region, timezone, and location
- 🗺️ Interactive world map powered by Leaflet.js
- ⚡ Fast and responsive user interface
- 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

- **Languages**: JavaScript, HTML, CSS  
- **APIs**: IP Geolocation API  
- **Libraries**: [Leaflet.js](https://leafletjs.com/)

---

## 🚀 Installation and Setup

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.)
- Basic text editor (e.g., VS Code)

### Steps

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/ip-address-tracker.git
   cd ip-address-tracker

2. **Open `index.html`** in your browser to run the app.

3. **(Optional)** Replace the API key in the JavaScript file with your own for better rate limits.

---

## 📌 Usage

1. Enter any valid IP address into the input box.
2. Click "Search".
3. View the location and details on the interactive map.

---

## 📁 Project Structure

```
ip-address-tracker/
│
├── index.html
├── style.css
├── script.js
└── assets/
    └── icons, images, etc.
```

---

## 📦 Dependencies

* `Leaflet.js` — for map rendering
* `ipgeolocation.io` or similar API — to fetch IP data

---

## 🧩 Customization

* 🌐 Change the map tile theme in `script.js` via Leaflet configuration.
* 🔑 Replace the IP API key to suit your usage plan.
* 🎨 Update styling in `style.css` to match your branding.

---

## 🐞 Known Issues

* API may block excessive requests without a key.
* Map may not center correctly if API response fails.

---

## 🚧 Future Improvements

* Add dark mode for the map UI
* Implement IP validation with error messages
* Show user’s own IP info on initial load
* Deploy as a live web app (e.g., on Netlify or GitHub Pages)

---

## 📄 License

This project is open-source under the **MIT License**.

---

## 🙌 Acknowledgments

* [Leaflet.js](https://leafletjs.com/) for the powerful mapping library
* [ipgeolocation.io](https://ipgeolocation.io/) or similar APIs
* Inspired by Frontend Mentor's IP Tracker Challenge
