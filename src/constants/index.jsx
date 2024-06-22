import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Sister Concerns",
    links: [
      { title: "Pykup Industries", href: "https://pykup.org" },
      { title: "Fly Ruposhi", href: "https://pykup.org" },
      { title: "Emran & Brothers Co", href: "https://pykup.org" },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
