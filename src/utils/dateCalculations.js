import React from "react";

export const calculateTimeOnPlanet = (birthDate) => {
  const birth = new Date(birthDate);
  const today = new Date();
  
  const yearDiff = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  const dayDiff = today.getDate() - birth.getDate();
  
  // Calculate total days
  const days = Math.floor((today - birth) / (1000 * 60 * 60 * 24));
  
  return {
    years: yearDiff,
    months: monthDiff + (dayDiff < 0 ? -1 : 0),
    days: days,
  };
};