export type Props = {
	searchParams: SearchParams;
};

type SearchParams = {
	url: URL;
	group_adults: string;
	group_children: string;
	no_rooms: string;
	checkin: string;
	checkout: string;
};

export type BookingURL = {
	url: URL;
	group_adults: string;
	group_children: string;
	no_rooms: string;
	checkin: string;
	checkout: string;
};

export type AdComponent = {
	title: string;
	image: string;
	tier: string;
};
