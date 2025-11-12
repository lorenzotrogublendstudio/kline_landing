// frontend/src/api/apiClient.js
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api';

export async function submitLead(payload) {
  const response = await fetch(`${API_BASE}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Impossibile inviare il lead.');
  }

  return response.json();
}