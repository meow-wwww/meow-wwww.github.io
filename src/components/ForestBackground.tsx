/**
 * Decorative pixel-art forest + sky background.
 * Fixed-position, pointer-events disabled, sits behind all content.
 * Uses semantic HSL tokens from index.css.
 */
const ForestBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Twinkling stars */}
      <PixelStar
        className="absolute left-[15%] top-[18%] h-3 w-3 animate-blink"
        style={{ color: "hsl(var(--highlight))" }}
      />
      <PixelStar
        className="absolute right-[40%] top-[22%] h-2 w-2 animate-blink"
        style={{ color: "hsl(var(--highlight))", animationDelay: "1.8s" }}
      />

      {/* Left edge trees & bamboo, growing from bottom */}
      <div className="absolute bottom-0 left-0 flex h-[78%] flex-col-reverse items-start opacity-60">
        <PixelTree className="h-72 w-32 animate-sway" />
      </div>
      <div className="absolute bottom-0 left-[8%] flex h-[55%] flex-col-reverse items-start">
        <PixelBamboo className="h-[60vh] w-10" style={{ animationDelay: "0.7s" }} />
      </div>
      <div className="absolute bottom-0 left-[2%] hidden h-[40%] flex-col-reverse items-start sm:flex">
        <PixelBamboo className="h-[40vh] w-8" style={{ animationDelay: "1.4s" }} />
      </div>

      {/* Right edge trees & bamboo */}
      <div className="absolute bottom-0 right-0 flex h-[80%] flex-col-reverse items-end opacity-60">
        <PixelTree
          className="h-80 w-36 animate-sway"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      <div className="absolute bottom-0 right-[10%] flex h-[58%] flex-col-reverse items-end">
        <PixelBamboo className="h-[58vh] w-10" style={{ animationDelay: "2s" }} />
      </div>
      <div className="absolute bottom-0 right-[3%] hidden h-[45%] flex-col-reverse items-end sm:flex">
        <PixelBamboo className="h-[45vh] w-8" style={{ animationDelay: "0.4s" }} />
      </div>

      {/* Edge critters — red pandas peeking */}
      <PixelPanda className="absolute bottom-[6%] left-[1%] h-12 w-12 animate-float opacity-60" />
      <PixelPanda
        className="absolute bottom-[18%] right-[2%] h-10 w-10 animate-float opacity-60"
        style={{ animationDelay: "1.6s" }}
        flip
      />
      <PixelLeaf
        className="absolute bottom-[35%] left-[12%] h-6 w-6 animate-float"
        style={{ animationDelay: "2.2s" }}
      />
      <PixelLeaf
        className="absolute bottom-[42%] right-[14%] h-5 w-5 animate-float"
        style={{ animationDelay: "0.9s" }}
      />

      {/* Ground hint at the very bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-6"
        style={{
          background:
            "linear-gradient(180deg, transparent, hsl(var(--leaf-dark) / 0.35))",
        }}
      />
    </div>
  );
};

/* --- Pixel SVG primitives --- */

const PixelCloud = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 20 12"
    className={className}
    style={style}
    fill="currentColor"
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    <rect x="4" y="4" width="12" height="6" />
    <rect x="2" y="6" width="16" height="2" />
    <rect x="6" y="2" width="6" height="2" />
    <rect x="10" y="3" width="6" height="2" />
  </svg>
);

const PixelStar = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 7 7"
    className={className}
    style={style}
    fill="currentColor"
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    <rect x="3" y="0" width="1" height="7" />
    <rect x="0" y="3" width="7" height="1" />
    <rect x="2" y="1" width="3" height="5" />
    <rect x="1" y="2" width="5" height="3" />
  </svg>
);

const PixelTree = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 16 32"
    className={className}
    style={style}
    shapeRendering="crispEdges"
    aria-hidden="true"
    preserveAspectRatio="xMidYEnd meet"
  >
    {/* Trunk */}
    <rect x="7" y="20" width="2" height="12" fill="hsl(var(--bark))" />
    <rect x="6" y="22" width="1" height="10" fill="hsl(var(--bark-light))" />
    {/* Foliage layers — leaf-dark and leaf-light pixels */}
    <rect x="4" y="14" width="8" height="6" fill="hsl(var(--leaf-dark))" />
    <rect x="3" y="15" width="10" height="4" fill="hsl(var(--leaf-dark))" />
    <rect x="5" y="10" width="6" height="6" fill="hsl(var(--leaf-dark))" />
    <rect x="4" y="11" width="8" height="4" fill="hsl(var(--leaf-dark))" />
    <rect x="6" y="6" width="4" height="6" fill="hsl(var(--leaf-dark))" />
    <rect x="5" y="7" width="6" height="4" fill="hsl(var(--leaf-dark))" />
    {/* Highlights */}
    <rect x="6" y="12" width="2" height="2" fill="hsl(var(--leaf-light))" />
    <rect x="9" y="16" width="2" height="2" fill="hsl(var(--leaf-light))" />
    <rect x="5" y="17" width="2" height="1" fill="hsl(var(--leaf-light))" />
    <rect x="7" y="8" width="2" height="2" fill="hsl(var(--leaf-light))" />
  </svg>
);

const PixelBamboo = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 6 60"
    className={className}
    style={{ opacity: 0.35, ...style }}
    shapeRendering="crispEdges"
    aria-hidden="true"
    preserveAspectRatio="xMidYEnd meet"
  >
    {/* Bamboo segments — pale, washed-out for readability */}
    <rect x="2" y="0" width="2" height="60" fill="hsl(90 45% 80%)" />
    <rect x="1" y="6" width="4" height="2" fill="hsl(110 35% 70%)" />
    <rect x="1" y="18" width="4" height="2" fill="hsl(110 35% 70%)" />
    <rect x="1" y="30" width="4" height="2" fill="hsl(110 35% 70%)" />
    <rect x="1" y="42" width="4" height="2" fill="hsl(110 35% 70%)" />
    <rect x="1" y="54" width="4" height="2" fill="hsl(110 35% 70%)" />
    {/* Leaves sprouting */}
    <rect x="4" y="10" width="2" height="1" fill="hsl(110 40% 75%)" />
    <rect x="0" y="22" width="2" height="1" fill="hsl(110 40% 75%)" />
    <rect x="4" y="34" width="2" height="1" fill="hsl(110 40% 75%)" />
    <rect x="0" y="46" width="2" height="1" fill="hsl(110 40% 75%)" />
  </svg>
);

const PixelLeaf = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 8 8"
    className={className}
    style={style}
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    <rect x="2" y="1" width="4" height="2" fill="hsl(var(--leaf-light))" />
    <rect x="1" y="2" width="6" height="3" fill="hsl(var(--leaf-light))" />
    <rect x="2" y="5" width="4" height="2" fill="hsl(var(--leaf-dark))" />
    <rect x="3" y="6" width="2" height="2" fill="hsl(var(--bark))" />
  </svg>
);

const PixelPanda = ({
  className,
  style,
  flip,
}: {
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
}) => (
  <svg
    viewBox="0 0 12 12"
    className={className}
    style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
    shapeRendering="crispEdges"
    aria-hidden="true"
  >
    {/* Ears */}
    <rect x="1" y="2" width="2" height="2" fill="hsl(var(--panda-orange))" />
    <rect x="9" y="2" width="2" height="2" fill="hsl(var(--panda-orange))" />
    <rect x="1" y="3" width="1" height="1" fill="hsl(0 0% 100%)" />
    <rect x="10" y="3" width="1" height="1" fill="hsl(0 0% 100%)" />
    {/* Head */}
    <rect x="2" y="3" width="8" height="6" fill="hsl(var(--panda-orange))" />
    {/* White muzzle */}
    <rect x="4" y="6" width="4" height="3" fill="hsl(0 0% 100%)" />
    {/* Eyes */}
    <rect x="4" y="5" width="1" height="1" fill="hsl(var(--panda-brown))" />
    <rect x="7" y="5" width="1" height="1" fill="hsl(var(--panda-brown))" />
    {/* Nose */}
    <rect x="5" y="7" width="2" height="1" fill="hsl(var(--panda-brown))" />
    {/* Body hint */}
    <rect x="3" y="9" width="6" height="2" fill="hsl(var(--panda-brown))" />
  </svg>
);

export default ForestBackground;
