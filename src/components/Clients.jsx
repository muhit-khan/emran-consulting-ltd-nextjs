import Image from "next/image";

import arroRealty from "../images/clients/arro-realty/arro-realty-full-white.png";
import logoFamilyFund from "../images/clients/family-fund/logo-light.svg";
import logoGreenLife from "../images/clients/green-life/logo-light.svg";
import logoUnseal from "../images/clients/unseal/logo-light.svg";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Arro Realty", arroRealty],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Green Life", logoGreenLife],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have worked with some of amazing people and organizations
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="items-center mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image
                    src={logo}
                    alt={client}
                    height={150}
                    unoptimized
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
