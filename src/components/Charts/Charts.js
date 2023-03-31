import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const Charts = ({ data, tooltip }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={data} margin={{ top: 10 }}>
        <defs>
          <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#D1C7BE" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#fafcfc" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {tooltip && <Tooltip />}
        <Area
          type="monotone"
          dataKey="Sell"
          stroke="#51504B"
          fill="url(#colorview)"
        />
        <Area
          type="monotone"
          dataKey="Buy"
          stroke="#51504B"
          fill="url(#colorview)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Charts;
