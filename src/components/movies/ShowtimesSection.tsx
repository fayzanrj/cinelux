import sortShowsByDate from '@/libs/SortShowsByDate'
import ShowtimeProps from '@/props/ShowtimeProps'
import React from 'react'
import ShowtimesListItem from './ShowtimesSectionItem'

// Props
interface ShowtimesSectionProps {
  showtimes: ShowtimeProps[]
}

const ShowtimesSection : React.FC<ShowtimesSectionProps> = ({ showtimes }) => {
  // Sorting showtimes, first by their dates and then their time in ascending order
  const allShowtimes = sortShowsByDate(showtimes)

  return (
    <section className='flex justify-center gap-2 flex-wrap'>
      {[...allShowtimes.entries()].map(([date, showtimes]) => (
        <ShowtimesListItem key={date} date={date} showtimes={showtimes} />
      ))}
    </section>
  )
}

export default ShowtimesSection
