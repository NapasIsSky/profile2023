import React from "react";

interface IStar {
  top: number;
  left: number;
  size: number;
  opacity: number;
}

interface IStars {
  className?: string;
}

const Stars: React.FC<IStars> = (props) => {
  const { className } = props;

  let stars: IStar[] = [];

  for (let i = 0; i <= 160; i++) {
    stars = [
      ...stars,
      {
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 8,
        opacity: Math.random() * 0.8,
      },
    ];
  }

  return (
    <div className={className}>
      {stars.map((star) => (
        <div
          style={{
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            backgroundColor: "#fff",
            opacity: star.opacity,
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
