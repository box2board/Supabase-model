"use client";
type Props = { data: number[]; width?: number; height?: number };

export default function MicroSparkline({ data, width = 80, height = 24 }: Props) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = Math.max(1, max - min);
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");
  const rising = data[data.length - 1] >= data[0];

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        fill="none"
        stroke={rising ? "#8c3dff" : "#8b8ba5"}
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
}
