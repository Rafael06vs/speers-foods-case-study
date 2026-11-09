/** Public portfolio demo. No external database, authentication or network calls. */
export const analyticsConfigured = true;
export type AdminStats = { visits: number; unique_sessions: number; quote_clicks: number; review_count: number; site_avg: number | null; purchase_avg: number | null };
export type QuoteInput = { company: string; contact: string; phone: string; notes: string; turnstileToken?: string; items: { id: string; name: string; brand: string; unit: string; quantity: number }[] };
export type QuoteRecord = QuoteInput & { reference: string; created_at: string; status: string };
export async function trackEvent(_event_type: "visit" | "quote_click" | "contact_request", _metadata: Record<string,string> = {}): Promise<void> { /* Demo only */ }
export async function submitReview(site_rating: number, purchase_rating: number): Promise<void> { if (![site_rating,purchase_rating].every(n => Number.isInteger(n) && n >= 1 && n <= 5)) throw new Error("Notas inválidas"); }
export async function submitQuote(quote: QuoteInput): Promise<string> { if (!quote.items.length) throw new Error("Adicione produtos ao carrinho."); return "DEMO-SEM-ENVIO"; }
