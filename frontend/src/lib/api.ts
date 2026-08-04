const API_URL = import.meta.env.VITE_API_URL;

export type Service = {
  id: number;
  name: string;
  category: string;
  price: string;
  note?: string;
};

export async function fetchServices(): Promise<Service[]> {
  const res = await fetch(`${API_URL}/services`);
  if (!res.ok) throw new Error("Failed to fetch services");
  const json = await res.json();
  return json.data;
}
export type Booking = {
  serviceId: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  notes?: string;
};

export async function createBooking(data: Booking) {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to create booking");
  }
  return res.json();
}