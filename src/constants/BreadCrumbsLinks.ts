const BREAD_CRUMB_LINKS = {
  BOOKING_NOW: [
    { label: "Home", href: "/" },
    { label: "Booking Now", href: "" },
  ],
  COMING_SOON: [
    { label: "Home", href: "/" },
    { label: "Coming Soon", href: "" },
  ],
  NOW_SHOWING: [
    { label: "Home", href: "/" },
    { label: "Now Showing", href: "" },
  ],
  MOVIE_DETAILS: [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies?q=now_showing" },
    { label: "", href: "" },
  ],
  SHOWTIMES: [
    { label: "Home", href: "/" },
    { label: "Showtimes", href: "" },
  ],
  TICKETS: [
    { label: "Home", href: "/" },
    { label: "Showtimes", href: "/showtimes" },
    { label: "Tickets", href: "" },
  ],
  MY_TICKETS: [
    { label: "Home", href: "/" },
    { label: "My Tickets", href: "" },
  ],
};

export default BREAD_CRUMB_LINKS;
