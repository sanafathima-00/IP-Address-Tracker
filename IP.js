document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");
    const infoItems = document.querySelectorAll(".info-value");

    // Initialize the map (initial view of the map)
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

    // Function to check if the IP address is private
    const isPrivateIP = (ip) => {
        const privateRanges = [
            /^10\./,                     // 10.0.0.0 - 10.255.255.255
            /^172\.(1[6-9]|2[0-9]|3[0-1])\./, // 172.16.0.0 - 172.31.255.255
            /^192\.168\./,               // 192.168.0.0 - 192.168.255.255
            /^127\./,                    // 127.0.0.0 - 127.255.255.255 (loopback)
            /^0\./                       // 0.0.0.0 - 0.255.255.255
        ];

        return privateRanges.some((range) => range.test(ip));
    };

    // Function to fetch data and update info-container and map
    const fetchIPData = async (ipAddress) => {
        try {
            // Check if IP is private
            if (isPrivateIP(ipAddress)) {
                alert("Can't track: This is a private IP address.");
                return;
            }

            // Use the entered IP address or default to the user's public IP
            const apiUrl = `https://ipinfo.io/${ipAddress}/json?token=a5f5351a516b59`; // Replace with your actual token
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Update info-container fields
            infoItems[0].textContent = data.ip || "-"; // IP Address
            infoItems[1].textContent = `${data.city || ''}, ${data.region || ''}` || "-"; // Location
            infoItems[2].textContent = data.timezone || "-"; // Timezone
            infoItems[3].textContent = data.org || "-"; // ISP

            // Update map location and add a marker
            if (data.loc) {
                const [lat, lon] = data.loc.split(",");
                const latLng = [parseFloat(lat), parseFloat(lon)];
                map.setView(latLng, 13); // Center map on the location
                L.marker(latLng).addTo(map)  // Add marker
                    .bindPopup(`<b>${data.city || ''}, ${data.region || ''}</b><br>${data.org || ''}`)
                    .openPopup();
            }

        } catch (error) {
            console.error('Error fetching IP data:', error);
            alert('There was an error fetching the IP data.');
        }
    };

    // Event listener for the search button
    searchIcon.addEventListener('click', () => {
        const ipAddress = searchInput.value.trim();
        if (ipAddress) {
            fetchIPData(ipAddress);
        }
    });
    // Event listener for the Enter key in the search input field
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            const ipAddress = searchInput.value.trim();
            if (ipAddress) {
                fetchIPData(ipAddress);
            }
        }
    });
});
