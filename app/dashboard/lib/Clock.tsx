"use client";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface LocationData {
  day: ReactNode;
  city: string;
  country: string;
  weekday: string;
  month: string;
  year: string;
  date: string;
  time: string;
}

const Clock: React.FC = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const locationResponse = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const { city, country } = getLocationDetails(
          locationResponse.data.address
        );
        const currentDate = new Date();
        const options: Intl.DateTimeFormatOptions = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const formattedDate = currentDate.toLocaleDateString(
          undefined,
          options
        );
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const [weekday, day, month, year] = formattedDate.split(/,\s|\s/);
        setLocationData({
          city,
          country,
          weekday,
          month,
          day,
          year,
          date: formattedDate,
          time: formattedTime,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const getCurrentPosition = () => {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const getLocationDetails = (address: any) => {
    const city =
      address.city ||
      address.town ||
      address.village ||
      address.hamlet ||
      address.suburb;
    const country = address.country;
    return { city, country };
  };

  return (
    <div className="tracking-[0.2em]">
      {locationData ? (
        <div>
          <p>
            <span>{locationData.time}</span>{" "}
            <span>
              {locationData.city}, {locationData.country}
            </span>
          </p>
          <p className="text-[#BE9F56]">
            <span>
              {locationData.weekday.toUpperCase()}, {locationData.day}{" "}
              {locationData.month.toUpperCase()} {locationData.year}
            </span>
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Clock;
