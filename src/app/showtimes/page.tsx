import BreadCrumbs from "@/components/shared/BreadCrumbs";
import BreadCrumb from "@/components/shared/BreadCrumbs";
import RemoveAnimationClass from "@/components/shared/RemoveAnimationClass";
import ShowtimesList from "@/components/showtimes/ShowtimesList";
import fetchShowtimesByDate from "@/libs/fetch/FetchShowtimesByDate";
import getUtc5 from "@/libs/GetUtc5";
import React from "react";

const Showtimes = async () => {
  // Getting utc+5 date
  const date = getUtc5();

  // Fetching showtimes for current date
  const showtimes = await fetchShowtimesByDate(date);

  // List
  return (
    <>
      <RemoveAnimationClass />
      <main className="p-3">
        {/* NAVIGATION */}
        <BreadCrumbs currentPage={"SHOWTIMES"} />

        <ShowtimesList date={date} showtimes={showtimes} />
      </main>
    </>
  );
};

export default Showtimes;
