import z from "zod";
export const registerSchema = z
	.object({
		name: z.string().min(1, "Campo Obbligatorio"),
		surname: z.string().min(1, "Campo Obbligatorio"),
		email: z.string().email("Email non valida"),
		password: z.string().min(6, "Lunghezza minima di 6 caratteri"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Le password devono essere uguali",
		path: ["confirmPassword"],
	});
export type TRegisterSchema = z.infer<typeof registerSchema>;

export const loginShema = z.object({
	email: z.string().email("Email non valida"),
	password: z.string().min(6, "Lunghezza minima di 6 caratteri"),
});
export type TLoginShema = z.infer<typeof loginShema>;

export interface Root {
	data: Daum[];
	dictionaries: Dictionaries;
}

export interface Daum {
	type: string;
	id: string;
	source: string;
	instantTicketingRequired: boolean;
	nonHomogeneous: boolean;
	oneWay: boolean;
	lastTicketingDate: string;
	lastTicketingDateTime: string;
	numberOfBookableSeats: number;
	itineraries: Itinerary[];
	price: Price;
	pricingOptions: PricingOptions;
	validatingAirlineCodes: string[];
	travelerPricings: TravelerPricing[];
}

export interface Itinerary {
	duration: string;
	segments: Segment[];
}

export interface Segment {
	departure: Departure;
	arrival: Arrival;
	carrierCode: string;
	number: string;
	aircraft: Aircraft;
	operating: Operating;
	duration: string;
	id: string;
	numberOfStops: number;
	blacklistedInEU: boolean;
}

export interface Departure {
	iataCode: string;
	terminal?: string;
	at: string;
}

export interface Arrival {
	iataCode: string;
	terminal?: string;
	at: string;
}

export interface Aircraft {
	code: string;
}

export interface Operating {
	carrierCode: string;
}

export interface Price {
	currency: string;
	total: string;
	base: string;
	fees: Fee[];
	grandTotal: string;
	additionalServices?: AdditionalService[];
}

export interface Fee {
	amount: string;
	type: string;
}

export interface AdditionalService {
	amount: string;
	type: string;
}

export interface PricingOptions {
	fareType: string[];
	includedCheckedBagsOnly: boolean;
}

export interface TravelerPricing {
	travelerId: string;
	fareOption: string;
	travelerType: string;
	price: Price2;
	fareDetailsBySegment: FareDetailsBySegment[];
}

export interface Price2 {
	currency: string;
	total: string;
	base: string;
}

export interface FareDetailsBySegment {
	segmentId: string;
	cabin: string;
	fareBasis: string;
	brandedFare: string;
	class: string;
	includedCheckedBags: IncludedCheckedBags;
}

export interface IncludedCheckedBags {
	quantity: number;
}

export interface Dictionaries {
	locations: Locations;
	aircraft: Aircraft2;
	currencies: Currencies;
	carriers: Carriers;
}

export interface Locations {
	[key: string]: City;
}

export interface City {
	cityCode: string;
	countryCode: string;
	cityName?: string;
}

export interface Aircraft2 {
	"320": string;
	"339": string;
	"32Q": string;
	"7M8": string;
	"75T": string;
	"32N": string;
}

export interface Currencies {
	EUR: string;
}

export interface Carriers {
	[key: string]: string;
}
