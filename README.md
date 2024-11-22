### README for **IP Address Tracker**

---

## Project Overview

The **IP Address Tracker** is a web application that allows users to search for details about a specific IP address or domain. It displays information such as the IP address, location, timezone, and ISP (Internet Service Provider) and visualizes the location on an interactive map using the Leaflet.js library.

---

## Features

- **IP Address Lookup**: Enter any IPv4 or IPv6 address or domain to get detailed information.
- **Location Visualization**: View the location of the IP address on an interactive map.
- **Dynamic Information Display**:
  - **IP Address**
  - **Location** (City, Region)
  - **Timezone**
  - **ISP**
- **User IP Detection**: Automatically displays the information of the user's own IP address if no search term is entered.
- **Keyboard Interaction**: Press "Enter" to initiate a search directly from the keyboard.
- **Responsive Design**: Mobile-friendly interface.

---

## Tech Stack

- **HTML**: Structuring the layout of the application.
- **CSS**: Styling the user interface.
- **JavaScript**: Logic to fetch and display data, and manage the interactive map.
- **Leaflet.js**: Displaying maps and markers.
- **IPinfo API**: Fetching IP address data and details.

---

## Installation and Setup

### Prerequisites

1. A modern web browser (e.g., Chrome, Firefox, Edge).
2. An active internet connection.

### Steps

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/ip-address-tracker.git
   ```
   Alternatively, download the project as a ZIP file and extract it.

2. **Add Your API Token**:
   - Sign up at [IPinfo](https://ipinfo.io/) to get your API token.
   - Replace the placeholder `YOUR_API_TOKEN` in the `IP.js` file with your actual token:
     ```javascript
     const apiUrl = `https://ipinfo.io/${ipAddress}/json?token=YOUR_API_TOKEN`;
     ```

3. **Open the Project**:
   - Navigate to the project directory.
   - Open the `IP.html` file in your browser.

---

## Usage

1. **Search for an IP Address or Domain**:
   - Enter an IP address or domain in the search box.
   - Press the search icon or the **Enter** key to fetch the details.
   - The results will appear in the information container, and the map will update to show the location.

2. **Check Your Own IP**:
   - Leave the search box empty and trigger the search.
   - The application will display details about your current public IP address.

---

## Project Structure

```
├── IP.html          # Main HTML file
├── IP.css           # Styling file for the application
├── IP.js            # JavaScript file containing the application logic
├── Top_bg.png       # Background image for the header section
├── README.md        # Project documentation
```

---

## Dependencies

1. **Leaflet.js**:
   - Map visualization library.
   - CDN: `https://unpkg.com/leaflet@1.9.4/dist/leaflet.js`

2. **FontAwesome**:
   - Icons for the search button.
   - CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css`

---

## Customization

1. **Change Default Map View**:
   - Modify the initial map coordinates in `IP.js`:
     ```javascript
     const map = L.map('map').setView([51.505, -0.09], 13);
     ```

2. **Update API Fields**:
   - Adjust the fields returned by the API by customizing the `fetchIPData` function in `IP.js`.

---

## Known Issues

- **Private IP Addresses**: The application cannot track private IPs (e.g., `192.168.x.x` or `10.x.x.x`).
- **Rate Limits**: The IPinfo API limits free users to 50,000 requests per month.

---

## Future Improvements

- Add reverse DNS lookup for domains.
- Allow users to save frequently searched IP addresses.
- Provide more detailed location information, such as postal code or nearby landmarks.
- Add dark mode for better user experience.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it for personal or commercial purposes.

---

## Acknowledgments

- [IPinfo API](https://ipinfo.io/) for providing the IP address lookup service.
- [Leaflet.js](https://leafletjs.com/) for the map visualization library.
- [FontAwesome](https://fontawesome.com/) for the icons.

---

Feel free to contact me for any queries or suggestions regarding this project! 😊
