import styled from "styled-components";

interface CircularProgressProps {
  percentage: number;
}

function CircularProgress({ percentage }: CircularProgressProps) {
  const radius = 30;
  const progressRadius = radius - 10; // Progress circle radius
  const backgroundRadius = progressRadius + 4; // Background circle radius
  const circumference = 2 * Math.PI * progressRadius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <SVGWrapper>
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        {/* Background circle */}
        <circle cx={radius} cy={radius} r={backgroundRadius} fill="#081c22 " />

        {/* Progress circle */}
        <circle
          cx={radius}
          cy={radius}
          r={progressRadius}
          fill="none"
          stroke="#204529"
          strokeWidth="3"
        />
        <circle
          cx={radius}
          cy={radius}
          r={progressRadius}
          fill="none"
          stroke="#21d07a"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${radius} ${radius})`}
          strokeLinecap="round"
        />

        {/* Percentage number */}
        <text
          x={radius}
          y={radius}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="15"
          fontWeight="bold"
          fill="#ffffff"
        >
          {percentage}
        </text>
        <text x={radius * 1.35} y={radius * 1.1} fontSize="6" fill="#ffffff">
          %
        </text>
      </svg>
    </SVGWrapper>
  );
}

const SVGWrapper = styled.div`
  display: inline-block;
`;

export default CircularProgress;
