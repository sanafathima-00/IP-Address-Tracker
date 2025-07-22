# **IP Address Tracker**

---

## 🌐 Project Overview

**IP Address Tracker** is a lightweight web-based tool that allows users to track and map any IP address with details like location, ISP, and timezone. It uses an interactive map for visual feedback and is ideal for learning how geolocation APIs work in practice.

---

## ✨ Features

* 📍 Track IP address location
* 🧭 Displays timezone, city, region, and ISP
* 🗺️ Interactive map with real-time markers using Leaflet.js
* 🔁 Auto-detects user IP on page load

---

## 🛠️ Tech Stack

| Layer    | Technology                               |
| -------- | ---------------------------------------- |
| Frontend | HTML, CSS, JavaScript                    |
| API      | IP Geolocation API (e.g., ipify + ipapi) |
| Map      | Leaflet.js + OpenStreetMap               |

---

## 🚀 How to Use

1. Clone the repository:

```bash
git clone https://github.com/your-username/ip-address-tracker.git
cd ip-address-tracker
```

2. Open `index.html` in any browser.

> No backend or build process required. It's a fully client-side web app.

3. Type any valid IP address in the input field and hit **Search** to view:

   * 📌 Location pin on map
   * 📅 Timezone
   * 🌐 ISP
   * 🧭 Region & Country

---

## 📁 Project Structure

```
ip-address-tracker/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📦 Dependencies

* [Leaflet.js](https://leafletjs.com/)
* [ipify API](https://www.ipify.org/) or [ipapi](https://ipapi.co/) (or similar geolocation services)

---

## 📌 Example Output

> Search for: `8.8.8.8`

```
IP Address: 8.8.8.8
City: Mountain View
Region: California
Country: United States
Timezone: UTC-08:00
ISP: Google LLC
```

And the map will auto-center to the location.

---

## 🧠 Learning Highlights

* API integration and async data handling in JavaScript
* Working with maps and markers using Leaflet.js
* DOM manipulation and responsive UI

---

## 📄 License

This project is open-source and licensed under the **MIT License**.

---

## 🙌 Acknowledgments

* [Leaflet.js](https://leafletjs.com/) for beautiful map rendering
* [ipify](https://ipify.org/) and [ipapi](https://ipapi.co/) for reliable IP data
* Open-source community for templates and styling inspiration
