import CountUp from "react-countup";

export default function Stat({ number, label }) {
  return (
    <div
      className="
        text-left
        md:pr-[clamp(30px,3.42vw,65px)]
        md:mr-[clamp(30px,3.42vw,65px)]
        md:border-r md:border-white/20
      "
    >
      <span className="block text-[clamp(1.4rem,4vw,1.8rem)] font-bold leading-none">
        <CountUp end={number} duration={3} separator="," />
      </span>

      <span className="text-sm text-white/60 mt-1 block">
        {label}
      </span>
    </div>
  );
}