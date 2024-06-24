import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import logoWhiteBG from "./../images/logo/R&B - White BG.png";
import logoBlackBG from "./../images/logo/R&W - Black BG.png";

const Logo = ({ invert, href, className, ...props }) => {
  const logo = invert ? logoBlackBG : logoWhiteBG;

  className = clsx(
    className,
    invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600"
  );

  const logoElement = (
    <Image
      src={logo}
      alt="Emran Consulting"
      // height={100}
      // width={100}
      style={{ height: "auto", width: "auto" }}
    />
  );

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {logoElement}
      </Link>
    );
  }

  return (
    <div
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {logoElement}
    </div>
  );
};

export default Logo;
