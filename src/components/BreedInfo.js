import React from "react";

export const BreedInfo = ({ pet }) => {
  const breedDetails = [
    { title: "שם הגזע: ", data: pet?.breeds?.[0].name },
    { title: "ארץ מוצא: ", data: pet?.breeds?.[0].origin },
    { title: "תוחלת חיים ממוצעת: ", data: pet?.breeds?.[0].life_span },
    { title: "תכונות אופי: ", data: pet?.breeds?.[0].temperament },
    { title: "תיאור כללי של הגזע: ", data: pet?.breeds?.[0].description },
    { title: "קישור לויקיפדיה: ", data: pet?.breeds?.[0].wikipedia_url },
  ];
  return (
    <div>
      {" "}
      {breedDetails.map((item) => {
        return (
          <p key={item.title}>
            {" "}
            {item.title} {item.data || "המידע לא זמין כרגע "}
          </p>
        );
      })}
    </div>
  );
};
