"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon (Leaflet default)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function UKMapInteractive() {
  const COLORS = {
    heading: "#40565C",
    accent: "#1C3B45",
    hover: "#294D56",
  };

  // City data
  const cities = {
    arbury_cambridge: {
      name: "Arbury, Cambridge",
      coords: [52.2053, 0.1218],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "33-35 Histon Road",
        "Arbury",
        "Cambridge",
        "CB4 3JB",
      ],
      phone: "01223 316 888",
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Closed on Sundays and Bank Holidays",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    colchester: {
      name: "Colchester",
      coords: [51.8892, 0.9042],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "115 Butt Road",
        "Colchester",
        "CO3 3DL",
      ],
      phone: "01206 764 544",
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Sundays and Bank Holidays 10am–1pm",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    felixstowe: {
      name: "Felixstowe",
      coords: [51.963, 1.351],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "31/39 Undercliff Rd West",
        "Felixstowe",
        "IP11 2AH",
      ],
      phone: "01394 278 886",
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Closed on Sundays & Bank Holidays",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    gorleston: {
      name: "Gorleston",
      coords: [52.571, 1.730],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "(Formerly Gorleston Exhausts & Tyre Centre)",
        "Unit 8, Riverside Industrial Estate",
        "Baker Street",
        "Gorleston",
        "NR31 6PU",
      ],
      phone: "01493 653 820",
      hours: [
        "Monday–Friday 8.30am–5.30pm",
        "Saturday 8.30am–12.30pm",
        "Closed on Sundays and Bank Holidays",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    great_yarmouth: {
      name: "Great Yarmouth",
      coords: [52.608, 1.730],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "52/57 Saint Nicholas Road",
        "Great Yarmouth",
        "NR30 1NP",
      ],
      phone: "01493 853 659",
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Sundays & Bank Holidays 10am–1pm",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    ipswich: {
      name: "Ipswich",
      coords: [52.059, 1.155],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "445-449 Norwich Road",
        "Ipswich",
        "IP1 5DW",
      ],
      phone: "01473 748411",
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Closed on Sundays",
        "Bank Holidays 10am–1pm",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    kettering: {
      name: "Kettering",
      coords: [52.398, -0.727],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "2 Stamford Road",
        "Kettering",
        "NN16 8LQ",
      ],
      phone: "01536 484 769",
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Sundays & Bank Holidays 10am–1pm",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    gaywood_kings_lynn: {
      name: "Gaywood, King's Lynn",
      coords: [52.753, 0.409],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "44 Lynn Road",
        "Gaywood",
        "King’s Lynn",
        "PE30 4PR",
      ],
      phone: "01553 777 158",
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Sundays & Bank Holidays 10am–1pm",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    lowestoft: {
      name: "Lowestoft",
      coords: [52.476, 1.751],
      address: [
        "Fast-Fit Tyres and Exhausts",
        "Camp Road",
        "Raglan Street",
        "Lowestoft",
        "NR32 2LL",
      ],
      phone: "01502 565 587",
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Closed on Sundays & Bank Holidays",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    dereham_road_norwich: {
      name: "Dereham Road, Norwich",
      coords: [52.626, 1.272],
      phone: "01603 626 732",
      address: [
        "Fast-Fit Tyres and Exhausts",
        "40/48 Dereham Road",
        "Norwich",
        "NR2 4AZ",
      ],
      hours: ["Monday–Saturday 8.30am–5.30pm", "Sundays & Bank Holidays 10am–1pm"],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    reepham_road_norwich: {
      name: "Reepham Road, Norwich",
      coords: [52.654, 1.281],
      phone: "01603 404 282",
      address: [
        "Fast-Fit Tyres and Exhausts",
        "2 Reepham Road",
        "Norwich",
        "NR6 5LE",
      ],
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Closed on Sundays",
        "Open Bank Holidays 10am–1pm",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    riverside_road_norwich: {
      name: "Riverside Road, Norwich",
      coords: [52.631, 1.309],
      phone: "01603 613 689",
      address: [
        "Fast-Fit Tyres and Exhausts",
        "65 Riverside Road",
        "Norwich",
        "NR1 1SR",
      ],
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Closed on Sundays & Bank Holidays",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    salhouse_road_norwich: {
      name: "Salhouse Road, Norwich",
      coords: [52.654, 1.344],
      phone: "01603 300 054",
      address: [
        "Fast-Fit Tyres and Exhausts",
        "186-200 Salhouse Road",
        "Norwich",
        "NR7 9AH",
      ],
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Sundays & Bank Holidays 10am–1pm",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
    st_neots: {
      name: "St Neots",
      coords: [52.23, -0.265],
      phone: "01480 472 133",
      address: [
        "Fast-Fit Tyres and Exhausts",
        "42-46 Cambridge Street",
        "St Neots",
        "PE19 1JP",
      ],
      hours: [
        "Monday–Saturday 8.30am–5.30pm",
        "Closed on Sundays & Bank Holidays",
      ],
      services: [
        "Tyres",
        "TPMS",
        "Exhausts & Catalytic Converters",
        "Wheel Alignment",
        "Car, Van, Camper & Motorcycle Batteries",
        "Air Conditioning Re-Gas",
        "Sanitising/Misting Service",
      ],
    },
  };

  const [selectedCity, setSelectedCity] = useState("arbury_cambridge");

  // Group Norwich branches together
  const norwichBranches = [
    "dereham_road_norwich",
    "reepham_road_norwich",
    "riverside_road_norwich",
    "salhouse_road_norwich",
  ];

  const isNorwich = norwichBranches.includes(selectedCity);

  const city = cities[selectedCity];
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode to body element on initial load
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  // Check localStorage for saved theme preference on load
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <section className="w-full py-1 bg-white dark:bg-[#0C1416] transition-colors">
      <h2
        className="text-center text-3xl mb-10 md:text-4xl font-bold text-primary dark:text-primary uppercase"
        data-aos="fade-down"
      >
        Find <span className="dark:text-white text-gray-700">Us</span>
      </h2>

      {/* LEFT PANEL */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="rounded-2xl p-6 md:p-8 shadow-sm bg-[#F5F7F8] dark:bg-[#111A1D]">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: COLORS.heading }}
          >
            {city.name}
          </h2>

          <div className="space-y-4 text-[15px] text-gray-700 dark:text-gray-200">
            <div>
              <p className="font-semibold text-base" style={{ color: COLORS.accent }}>
                Address
              </p>
              {city.address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>

            <div>
              <p className="font-semibold" style={{ color: COLORS.accent }}>
                Phone
              </p>
              <a
                href={`tel:${city.phone}`}
                className="underline decoration-transparent hover:decoration-inherit"
                style={{ color: COLORS.hover }}
              >
                {city.phone}
              </a>
            </div>

            <div>
              <p className="font-semibold" style={{ color: COLORS.accent }}>
                Opening Hours
              </p>
              <p>{city.hours}</p>
              <p>Closed on Sundays and Bank Holidays</p>
            </div>

            <div>
              <p className="font-semibold" style={{ color: COLORS.accent }}>
                Services
              </p>
              <ul className="list-disc ml-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                {city.services.map((srv, i) => (
                  <li key={i}>{srv}</li>
                ))}
              </ul>
            </div>

            <div className="pt-3">
              <a
                href="#book-online"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-sm bg-[#1C3B45] text-white hover:opacity-90"
              >
                BOOK ONLINE ►
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: ACTUAL INTERACTIVE MAP */}
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <MapContainer
            center={[52.3555, -1.1743]} // roughly UK center
            zoom={6}
            style={{ height: "500px", width: "100%" }} // Ensure map stays within this height
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* City Markers */}
            {Object.entries(cities).map(([key, data]) => (
              <Marker
                key={key}
                position={data.coords}
                eventHandlers={{
                  click: () => setSelectedCity(key),
                }}
              >
                <Popup>
                  <div className="text-sm font-medium">{data.name}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
