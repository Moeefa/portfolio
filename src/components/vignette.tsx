export default function Vignette() {
  return (
    <>
      <div className="fixed z-30 pointer-events-none bg-[radial-gradient(transparent_80%,hsl(var(--secondary)/0.4))] top-0 right-0 h-full w-full" />
      <div className="fixed z-30 pointer-events-none bg-gradient-to-b top-0 from-secondary/40 h-14 w-full" />
      <div className="fixed z-30 pointer-events-none bg-gradient-to-t bottom-0 from-secondary/40 h-14 w-full" />
      <div className="fixed z-30 pointer-events-none bg-gradient-to-r top-0 left-0 from-secondary/10 h-full w-16" />
      <div className="fixed z-30 pointer-events-none bg-gradient-to-l top-0 right-0 from-secondary/10 h-full w-16" />
    </>
  );
}
