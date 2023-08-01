import { BsTelephone, BsGeoAlt, BsEnvelopeHeart } from "react-icons/bs";
import { BsInstagram, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

export const Contacts = [
  {
    id: 1,
    subtitle: "Encuentranos",
    paragraph: "Argentina | Buenos Aires",
    icon: (
      <BsGeoAlt
        className="fs-1 mt-lg-2 me-lg-0 me-3 mt-2"
        style={{ fontSize: "3rem", color: " #8c524c" }}
      />
    ),
  },
  {
    id: 2,
    subtitle: "Llámanos",
    paragraph: "+54 09 1184336432",
    icon: (
      <BsTelephone
        className="fs-1 mt-lg-2 me-lg-0 me-3 mt-2"
        style={{ fontSize: "3rem", color: " #8c524c" }}
      />
    ),
  },
  {
    id: 3,
    subtitle: "Nuestro Email",
    paragraph: "jehnnygutierrez@gmail.com",
    icon: (
      <BsEnvelopeHeart
        className="fs-1 mt-lg-2 me-lg-0 me-3 mt-2"
        style={{ fontSize: "3rem", color: " #8c524c" }}
      />
    ),
  },
];

export const Links = [
  { id: 1, link: ["Inicio", "Servicios", "Contacto" ] },
  { id: 2, link: ["Nosotras", "Galeria", "Grupo experto"] },
];

export const Networks = [
{id: 1, icon: <BsInstagram   />,},
{id: 2, icon:<BsTwitter  />},
{id: 3, icon:  <BsYoutube  />},
{id: 4, icon:   <BsLinkedin  />}
 

];
