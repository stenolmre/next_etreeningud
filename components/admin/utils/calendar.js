import React, { useState, useEffect } from 'react'
import { datesGenerator } from 'dates-generator'

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const days = ['E', 'T', 'K', 'N', 'R', 'L', 'P']
  const months = ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'Sepember', 'Oktoober', 'November', 'Detsember']

  const [dates, setDates] = useState([])
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  })

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year
    }

    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body)

    setDates([ ...dates ])
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    })
  }, [])

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear }
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body)

    setDates([ ...dates ])
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    })
  }

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear }
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body)

    setDates([ ...dates ])
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    })
  }

  const onSelectDate = (date) => {
    setSelectedDate(new Date(date.year, date.month, date.date))
  }

  return <div>
    <div className="calendar neumorphism">
      <div className="calendar_header">
        <i className="fas fa-chevron-left" onClick={onClickPrevious}/>
        <p>{months[calendar.month]} {[calendar.year]}</p>
        <i className="fas fa-chevron-right" onClick={onClickNext}/>
      </div>
      <table>
        <tbody>
          <tr className="calendar_days">
            {
              days.map(day => <td key={day}>
                <div>{day}</div>
              </td>)
            }
          </tr>
          {
            dates.length > 0 && dates.map(week => <tr key={JSON.stringify(week[0])}>
              {
                week.map(each => <td key={JSON.stringify(each)}>
                  <div style={{ cursor: 'pointer' }} className={each.month !== months.indexOf(months[calendar.month]) ? 'calendar_non_active_date' : selectedDate.toDateString() === new Date(each.year, each.month, each.date).toDateString() ? 'calendar_date calendar_active_date' : 'calendar_date'} onClick={() => onSelectDate(each)}>{each.date}</div>
                </td>)
              }
            </tr>)
          }
        </tbody>
      </table>
    </div>
  </div>
}

export default Calendar
