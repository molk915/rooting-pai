import React, { useEffect, useState } from "react";
import "./AdventCalendar.scss";
import getRandomInt from "../../utils";
import grades from "../../mocks/grades.json";
import subjects from "../../mocks/subjects";
const AdventCalendar = () => {
  const initDays =
    JSON.parse(localStorage.getItem("days")) ||
    Array(24).fill({ grade: null, date: null });

  const [currentTimeStamp, setCurrentTimeStamp] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimeStamp(Date.now());
    }, 1000);
    return () => clearInterval(intervalId);
  });
  const [days, setDays] = useState(initDays);
  useEffect(() => {
    localStorage.setItem("days", JSON.stringify(days));
  }, [days]);

  const handleButtonClick = (dayIndex) => {
    const gradeIndex = getRandomInt(0, grades.length);
    const subjectIndex = getRandomInt(0, subjects.length);
    const grade = grades[gradeIndex];
    const subject = subjects[subjectIndex];
    setDays(days.with(dayIndex, { grade, subject }));
  };
  const currentDate = new Date(currentTimeStamp);

  return (
    <div className="advent-calendar">
      {days.map((day, index) => (
        <button
          className="day"
          disabled={
            day.grade !== null ||
            currentDate.getMonth() !== 11 ||
            currentDate.getDate() < index + 1
          }x    
          
          onClick={() => handleButtonClick(index)}
        >
          <header> {index + 1} </header>
          {day.grade !== null && day.subject !== null && (
            <div>
              {day.grade} z {day.subject}
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default AdventCalendar;
