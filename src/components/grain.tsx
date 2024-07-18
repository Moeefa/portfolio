export default function Grain() {
  return (
    <div className="pointer-events-none fixed z-50 h-screen w-screen opacity-[3%] bg-[length:256px] bg-repeat bg-[url('/noise.png')] overflow-hidden animate-[grain_0.8s_steps(1)_infinite]"></div>
  );
}
