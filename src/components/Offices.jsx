import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="USA" invert={invert}>
          <a target="_blank" href="https://www.google.com/maps/place/7300+State+Ave+%23821,+Kansas+City,+KS+66112,+USA/@54.2852081,-109.1691363,3.18z/data=!4m5!3m4!1s0x87c08ceaa0090dfd:0x1283c95cccefde75!8m2!3d39.1190344!4d-94.748511?entry=ttu">
            7300 State Ave, Apt 821
            <br />
            Kansas City, KS USA 66112
          </a>
        </Office>
      </li>
      <li>
        <Office name="Canada" invert={invert}>
          <a target="_blank" href="https://www.google.com/maps/place/7+Ungava+Bay+Rd,+Brampton,+ON+L6R+3M6,+Canada/@43.7745067,-79.7410978,17z/data=!3m1!4b1!4m6!3m5!1s0x882b17e2619daa05:0xa7b8faff05f881b0!8m2!3d43.7745067!4d-79.7410978!16s%2Fg%2F11hbjkblbf?entry=ttu">
            7 Ungava Bay Rd
            <br />
            Brampton, ON L6R 3M6 Canada
          </a>
        </Office>
      </li>
      <li>
        <Office name="Bangladesh" invert={invert}>
          <a target="_blank" href="https://www.google.com/maps/place/58+Rd+No.+19,+Dhaka/@23.8347739,90.4098961,17z/data=!3m1!4b1!4m9!1m2!2m1!1sHouse+58,+Road+19+Nikunja-2,+Khilkhet-1229+Dhaka-1229,+Bangladesh!3m5!1s0x3755c660900ba61f:0xfd5c87683bd02cc3!8m2!3d23.834774!4d90.414767!15sCkFIb3VzZSA1OCwgUm9hZCAxOSBOaWt1bmphLTIsIEtoaWxraGV0LTEyMjkgRGhha2EtMTIyOSwgQmFuZ2xhZGVzaJIBEGdlb2NvZGVkX2FkZHJlc3PgAQA?entry=ttu">
            House 58, Road 19
            <br />
            Nikunja-2, Khilkhet-1229
            <br />
            Dhaka-1229, Bangladesh
          </a>
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
