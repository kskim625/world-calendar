import { useEffect, useState } from 'react';
import styles from '../styles/Calendar.module.css';

interface datetimeType {
  year: number;
  month: number;
  day: number;
}

interface holidayType {
  country: { id: string; name: string };
  date: { datetime: datetimeType; iso: string };
  description: string;
  locations: string;
  name: string;
  states: string;
  type: string[];
}

const CalendarHeader = () => {
  return (
    <div className={styles.dayType}>
      <div className={styles.dayTypeToday}>31</div>
      {'today'}
      <div className={styles.dayTypeHoliday}></div>
      {'holidays'}
    </div>
  );
};

const Calendar = ({ date, holidays }: { date: Date; holidays: holidayType[] | [] }) => {
  const [thisCalendar, setThisCalendar] = useState<JSX.Element>(<></>);
  const [thisHolidays, setThisHolidays] = useState<holidayType[]>([]);
  const DAYS_IN_A_WEEK: number = 7;

  const decideHoliday = (calEl: string) => {
    return (
      thisHolidays.filter((holiday) => {
        return holiday.date.datetime.day === Number(calEl);
      }).length > 0
    );
  };

  const drawCalendarEl = (calEl: string, j: number) => {
    const today: Date = new Date();
    const isToday: boolean = today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && today.getDate() === Number(calEl);
    const isHoliday: boolean = decideHoliday(calEl);

    return isToday ? (
      <div className={`${styles.calendarContent} ${styles.calendarToday}`} key={`calendarEl-${j}`}>
        {calEl}
      </div>
    ) : isHoliday ? (
      <div className={`${styles.calendarContent} ${styles.calendarHoliday}`} key={`calendarEl-${j}`}>
        {calEl}
      </div>
    ) : (
      <div className={styles.calendarContent} key={`calendarEl-${j}`}>
        {calEl}
      </div>
    );
  };

  const drawCalendarRow = (calendarRow: string[], i: number) => {
    return (
      <div className={styles.calendarRow} key={`calendar-${i}`}>
        {calendarRow.map((calEl, j) => {
          return drawCalendarEl(calEl, j);
        })}
      </div>
    );
  };

  const drawCalendar = (calendarArray: string[][]) => {
    setThisCalendar(
      <>
        {calendarArray.map((calendarRow, i) => {
          return drawCalendarRow(calendarRow, i);
        })}
      </>
    );
  };

  const setCalendarRow = (year: number, month: number, date: number, lastDate: number) => {
    const firstDay: number = new Date(year, month, 1).getDay();
    const thisRow: string[] = date === 1 ? new Array(firstDay).fill('') : [];
    while (thisRow.length < DAYS_IN_A_WEEK && date <= lastDate) {
      thisRow.push(String(date));
      date += 1;
    }
    while (thisRow.length < DAYS_IN_A_WEEK) {
      thisRow.push('');
    }
    return thisRow;
  };

  const makeCalendar = (year: number, month: number) => {
    const lastDate = new Date(year, month + 1, 0).getDate();
    const calendarRows = [['일', '월', '화', '수', '목', '금', '토']];
    const firstRow = setCalendarRow(year, month, 1, lastDate);
    calendarRows.push(firstRow);
    let currentDate =
      DAYS_IN_A_WEEK -
      firstRow.filter((str) => {
        return str === '';
      }).length;
    while (currentDate < lastDate) {
      calendarRows.push(setCalendarRow(year, month, currentDate, lastDate));
      currentDate += DAYS_IN_A_WEEK;
    }
    return calendarRows;
  };

  const setCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    drawCalendar(makeCalendar(year, month));
  };

  useEffect(() => {
    setThisHolidays(
      holidays.filter((holiday) => {
        return holiday.date.datetime.month === date.getMonth() + 1;
      })
    );
  }, []);

  useEffect(() => {
    setCalendar();
  }, [thisHolidays]);

  return (
    <div className={styles.calendarWrapper}>
      {`${date.getFullYear()}년 ${date.getMonth() + 1}월`}
      <CalendarHeader />
      {thisCalendar}
    </div>
  );
};

export default Calendar;