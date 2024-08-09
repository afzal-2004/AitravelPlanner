/* eslint-disable no-unused-vars */
/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_MODEL;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Mumbai for 3 days for family With a cheap Budget ,Give me a Hotel Options List with Hotel Name, Hotel address ,Price Hotel image URL ,Geocoordinate, rating ,description and suggest itinerary with place Name, Place details ,place Image URL ,geo coordinate ,Ticket Pricing, rating Time travel each Of the location for 3 days With each day plan with best time to visit in Json format\n\n\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "location": "Mumbai",\n  "duration": "3 days",\n  "budget": "cheap",\n  "family_friendly": true,\n  "hotels": [\n    {\n      "name": "Hotel Sai Palace",\n      "address": "16, Bhendi Bazaar, Mumbai, Maharashtra 400003",\n      "price": "$20 - $30 per night",\n      "image_url": "https://www.booking.com/hotel/in/sai-palace.en-gb.html",\n      "geocoordinate": "18.9434° N, 72.8416° E",\n      "rating": 3.5,\n      "description": "A budget-friendly hotel in the heart of Mumbai, offering basic amenities and comfortable rooms."\n    },\n    {\n      "name": "Hotel Grand Sarovar Premiere",\n      "address": "Andheri Kurla Road, Andheri East, Mumbai, Maharashtra 400059",\n      "price": "$40 - $50 per night",\n      "image_url": "https://www.booking.com/hotel/in/grand-sarovar-premiere-andheri-e.en-gb.html",\n      "geocoordinate": "19.0864° N, 72.8804° E",\n      "rating": 4,\n      "description": "A mid-range hotel with modern amenities and a rooftop pool, offering a good value for money."\n    },\n    {\n      "name": "The Fern - An Ecotel Hotel, Mumbai",\n      "address": "Ghatkopar - Mankhurd Link Rd, Near L&T, Mumbai, Maharashtra 400086",\n      "price": "$50 - $60 per night",\n      "image_url": "https://www.booking.com/hotel/in/the-fern-an-ecotel-hotel-mumbai.en-gb.html",\n      "geocoordinate": "19.0696° N, 72.9195° E",\n      "rating": 4.5,\n      "description": "An eco-friendly hotel with spacious rooms and a focus on sustainability, offering a relaxing stay."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": "Day 1",\n      "theme": "City Exploration",\n      "schedule": [\n        {\n          "time": "9:00 AM",\n          "location": "Gateway of India",\n          "details": "Iconic arch monument, a must-visit for any Mumbai trip. Take a ferry ride to the Elephanta Caves.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Gateway_of_India_Mumbai.jpg/1280px-Gateway_of_India_Mumbai.jpg",\n          "geocoordinate": "18.9220° N, 72.8347° E",\n          "ticket_pricing": "Free",\n          "rating": 4.8,\n          "time_travel": "2 hours"\n        },\n        {\n          "time": "1:00 PM",\n          "location": "Dhobi Ghat",\n          "details": "World\'s largest open-air laundry, a fascinating glimpse into Mumbai\'s unique culture.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dhobi_Ghat_Mumbai.jpg/1280px-Dhobi_Ghat_Mumbai.jpg",\n          "geocoordinate": "18.9310° N, 72.8312° E",\n          "ticket_pricing": "Free",\n          "rating": 4,\n          "time_travel": "1 hour"\n        },\n        {\n          "time": "4:00 PM",\n          "location": "Chhatrapati Shivaji Maharaj Terminus",\n          "details": "UNESCO World Heritage Site, a magnificent example of Victorian Gothic architecture.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/CST_Mumbai_India_by_David_Stanley.jpg/1280px-CST_Mumbai_India_by_David_Stanley.jpg",\n          "geocoordinate": "18.9411° N, 72.8400° E",\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_travel": "1 hour"\n        },\n        {\n          "time": "7:00 PM",\n          "location": "Marine Drive",\n          "details": "Breathtaking waterfront promenade, enjoy the sunset and street food.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Marine_Drive_Mumbai.jpg/1280px-Marine_Drive_Mumbai.jpg",\n          "geocoordinate": "18.9345° N, 72.8339° E",\n          "ticket_pricing": "Free",\n          "rating": 4.7,\n          "time_travel": "1 hour"\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "theme": "Cultural Immersion",\n      "schedule": [\n        {\n          "time": "10:00 AM",\n          "location": "Mani Bhavan",\n          "details": "Gandhi\'s residence in Mumbai, learn about his life and teachings.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Mani_Bhavan.jpg/1280px-Mani_Bhavan.jpg",\n          "geocoordinate": "18.9345° N, 72.8308° E",\n          "ticket_pricing": "₹10",\n          "rating": 4.2,\n          "time_travel": "1.5 hours"\n        },\n        {\n          "time": "12:00 PM",\n          "location": "Shree Siddhivinayak Temple",\n          "details": "Famous Hindu temple dedicated to Lord Ganesha, experience the vibrant rituals.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Shree_Siddhivinayak_Temple_Mumbai.jpg/1280px-Shree_Siddhivinayak_Temple_Mumbai.jpg",\n          "geocoordinate": "18.9589° N, 72.8329° E",\n          "ticket_pricing": "Free",\n          "rating": 4.6,\n          "time_travel": "1 hour"\n        },\n        {\n          "time": "3:00 PM",\n          "location": "Kanheri Caves",\n          "details": "Ancient Buddhist cave temples carved into the hills, enjoy a scenic hike.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Kanheri_Caves_near_Mumbai.jpg/1280px-Kanheri_Caves_near_Mumbai.jpg",\n          "geocoordinate": "19.1772° N, 72.9187° E",\n          "ticket_pricing": "₹10",\n          "rating": 4.3,\n          "time_travel": "3 hours"\n        },\n        {\n          "time": "7:00 PM",\n          "location": "Bandra-Worli Sea Link",\n          "details": "Impressive bridge with stunning views of the city, enjoy a scenic drive.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bandra_Worli_Sea_Link_at_night.jpg/1280px-Bandra_Worli_Sea_Link_at_night.jpg",\n          "geocoordinate": "19.0427° N, 72.8419° E",\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_travel": "1 hour"\n        }\n      ]\n    },\n    {\n      "day": "Day 3",\n      "theme": "Entertainment & Shopping",\n      "schedule": [\n        {\n          "time": "10:00 AM",\n          "location": "Juhu Beach",\n          "details": "Famous beach with vibrant atmosphere, enjoy the sand, waves, and street food.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Juhu_Beach_Mumbai.jpg/1280px-Juhu_Beach_Mumbai.jpg",\n          "geocoordinate": "19.0594° N, 72.8400° E",\n          "ticket_pricing": "Free",\n          "rating": 4.4,\n          "time_travel": "2 hours"\n        },\n        {\n          "time": "1:00 PM",\n          "location": "Bandra-Kurla Complex",\n          "details": "Modern commercial hub with shopping malls, restaurants, and entertainment options.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/BKC_Mumbai.jpg/1280px-BKC_Mumbai.jpg",\n          "geocoordinate": "19.0539° N, 72.8695° E",\n          "ticket_pricing": "Varies by shops",\n          "rating": 4,\n          "time_travel": "3 hours"\n        },\n        {\n          "time": "6:00 PM",\n          "location": "Colaba Causeway",\n          "details": "Famous street market for souvenirs, clothing, and local crafts.",\n          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Colaba_Causeway_street_food.jpg/1280px-Colaba_Causeway_street_food.jpg",\n          "geocoordinate": "18.9278° N, 72.8353° E",\n          "ticket_pricing": "Free",\n          "rating": 4.2,\n          "time_travel": "2 hours"\n        }\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
