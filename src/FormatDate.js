import React from "react";

export default function FormatDate (props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let mins = props.date.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }

  return (
    <div>
      <strong>
        {day}, {hours}:{mins}
      </strong>
    </div>
  );
}
