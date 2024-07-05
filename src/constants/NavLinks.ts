import NavProps from "@/props/NavProps"

const NavLinks : NavProps[] = [
    {
        label : "Booking Now",
        href : "/movies?q=booking_now"
    },
    {
        label : "Now Showing",
        href : "/movies?q=now_showing"
    },
    {
        label : "Coming Soon",
        href : "/movies?q=coming_soon"
    },
    {
        label : "Showtimes",
        href : "/showtimes",
    },

]

export default NavLinks