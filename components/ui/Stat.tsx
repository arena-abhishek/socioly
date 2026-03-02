import CountUp from "react-countup";

export default function Stat({ number, label }: { number: number; label: string }) {
  return (
    <div className="text-left
      pr-[clamp(30px,3.42vw,65px)]
      mr-[clamp(30px,3.42vw,65px)]
      border-r border-white/20">
      <span className="block text-[clamp(20px,1.26vw,24px)] font-bold">
        <CountUp end={number} duration={3} separator="," />
      </span>
      <span className="text-sm text-white/60">
        {label}
      </span>
    </div>
  );
}