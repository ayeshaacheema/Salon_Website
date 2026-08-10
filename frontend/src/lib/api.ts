const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") ||
  "http://localhost:5000/api";

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

export type Review = {
  id: number;
  name: string;
  role?: string | null;
  comment: string;
  rating: number;
};

export async function fetchReviews(): Promise<Review[]> {
  const res = await fetch(`${API_URL}/reviews`);
  if (!res.ok) throw new Error("Failed to fetch reviews");
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

function bookingErrorMessage(err: {
  message?: string;
  errors?: { field?: string; message?: string }[];
}): string {
  if (Array.isArray(err.errors) && err.errors.length > 0) {
    return err.errors
      .map((e) => e.message)
      .filter(Boolean)
      .join(". ");
  }
  return err.message || "Failed to create booking";
}

export async function createBooking(data: Booking) {
  const res = await fetch(`${API_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    let err: { message?: string; errors?: { field?: string; message?: string }[] } = {};
    try {
      err = await res.json();
    } catch {
      // non-JSON error body
    }
    throw new Error(bookingErrorMessage(err));
  }
  return res.json();
}
