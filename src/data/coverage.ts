import type { RegionData } from '@/types/content';

export const regions: RegionData[] = [
  { id: 'up', name: 'Uttar Pradesh', cities: ['Noida', 'Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Prayagraj', 'Ghaziabad', 'Meerut'], coverage: 'full', offices: ['noida-hq'] },
  { id: 'delhi', name: 'Delhi', cities: ['New Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'North Delhi'], coverage: 'full', offices: ['delhi'] },
  { id: 'uttarakhand', name: 'Uttarakhand', cities: ['Dehradun', 'Haridwar', 'Rishikesh', 'Haldwani', 'Roorkee'], coverage: 'full', offices: ['dehradun'] },
  { id: 'punjab', name: 'Punjab', cities: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'], coverage: 'full', offices: ['chandigarh'] },
  { id: 'haryana', name: 'Haryana', cities: ['Gurugram', 'Faridabad', 'Panchkula', 'Ambala', 'Karnal'], coverage: 'full', offices: ['gurugram'] },
  { id: 'mp', name: 'Madhya Pradesh', cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'], coverage: 'full', offices: ['bhopal'] },
  { id: 'rajasthan', name: 'Rajasthan', cities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Bikaner'], coverage: 'full', offices: ['jaipur'] },
  { id: 'bihar', name: 'Bihar', cities: ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur'], coverage: 'full', offices: ['patna'] },
  { id: 'jharkhand', name: 'Jharkhand', cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro'], coverage: 'full', offices: ['ranchi'] },
  { id: 'maharashtra', name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'], coverage: 'full', offices: ['mumbai'] },
  { id: 'hp', name: 'Himachal Pradesh', cities: ['Shimla', 'Dharamshala', 'Mandi', 'Solan'], coverage: 'partial', offices: [] },
];

export const offices = [
  { id: 'noida-hq', name: 'Corporate Headquarters', address: 'Sector 62', city: 'Noida', state: 'Uttar Pradesh', phone: '+91 9889001577', email: 'info@klaudhunter.com', coordinates: { lat: 28.584, lng: 77.319 }, isHeadquarters: true },
  { id: 'delhi', name: 'Delhi Office', address: 'Connaught Place', city: 'New Delhi', state: 'Delhi', phone: '+91 9196199191', email: 'delhi@klaudhunter.com', coordinates: { lat: 28.632, lng: 77.220 }, isHeadquarters: false },
  { id: 'mumbai', name: 'Mumbai Office', address: 'Andheri East', city: 'Mumbai', state: 'Maharashtra', phone: '+91 9889001577', email: 'mumbai@klaudhunter.com', coordinates: { lat: 19.076, lng: 72.877 }, isHeadquarters: false },
  { id: 'gurugram', name: 'Gurugram Office', address: 'Gurgaon', city: 'Gurugram', state: 'Haryana', phone: '+91 9889001577', email: 'gurugram@klaudhunter.com', coordinates: { lat: 28.459, lng: 77.026 }, isHeadquarters: false },
  { id: 'chandigarh', name: 'Chandigarh Office', address: 'Sector 8', city: 'Chandigarh', state: 'Punjab', phone: '+91 9196199191', email: 'chandigarh@klaudhunter.com', coordinates: { lat: 30.733, lng: 76.779 }, isHeadquarters: false },
  { id: 'lucknow', name: 'Lucknow Office', address: 'Gomti Nagar', city: 'Lucknow', state: 'Uttar Pradesh', phone: '+91 9889001577', email: 'lucknow@klaudhunter.com', coordinates: { lat: 26.847, lng: 80.947 }, isHeadquarters: false },
  { id: 'patna', name: 'Patna Office', address: 'Boring Road', city: 'Patna', state: 'Bihar', phone: '+91 9196199191', email: 'patna@klaudhunter.com', coordinates: { lat: 25.594, lng: 85.138 }, isHeadquarters: false },
  { id: 'ranchi', name: 'Ranchi Office', address: 'Main Road', city: 'Ranchi', state: 'Jharkhand', phone: '+91 9889001577', email: 'ranchi@klaudhunter.com', coordinates: { lat: 23.344, lng: 85.310 }, isHeadquarters: false },
  { id: 'jaipur', name: 'Jaipur Office', address: 'MI Road', city: 'Jaipur', state: 'Rajasthan', phone: '+91 9196199191', email: 'jaipur@klaudhunter.com', coordinates: { lat: 26.912, lng: 75.787 }, isHeadquarters: false },
  { id: 'bhopal', name: 'Bhopal Office', address: 'MP Nagar', city: 'Bhopal', state: 'Madhya Pradesh', phone: '+91 9889001577', email: 'bhopal@klaudhunter.com', coordinates: { lat: 23.259, lng: 77.412 }, isHeadquarters: false },
  { id: 'dehradun', name: 'Dehradun Office', address: 'Rajpur Road', city: 'Dehradun', state: 'Uttarakhand', phone: '+91 9196199191', email: 'dehradun@klaudhunter.com', coordinates: { lat: 30.316, lng: 78.032 }, isHeadquarters: false },
];
