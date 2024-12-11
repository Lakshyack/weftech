import React from "react";
import Image from 'next/image';


export default function Footer() {
  const infosPratiques = [
    "À propos",
    "Livraisons & Reprises",
    `Mode d&apos;emploi`,
    "F.A.Q",
  ];
  const legal = [
    "Mentions légales",
    "CGU",
    "CGV",
    "Politique de confidentialité",
  ];
  const monCompte = [
    "Accéder à mon compte",
    "Ma liste d&apos;envie",
    "Créer un compte",
    "Mot de passe oublié",
  ];

  return (
    <div
      className="container w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
      style={{ height: "px", marginTop: "30px", marginBottom: "140px" }}
    >
      <div className="flex flex-col justify-between sm:flex-row gap-6">
        <div className="flex gap-10 flex-1">
          <div className="">
            <Image src="/images/Logo.png" width={200} height={100} className="p-5" alt="L" />
          </div>
          <div>
            <ul>
              <li
                style={{
                  fontWeight: "700",
                  color: "#393939",
                   fontSize:"15px"
                }}
              >
                INFOS PRATIQUES
              </li>
              {infosPratiques.map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: "400",
                    color: "#393939",
                     fontSize:"13px"
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <li
                style={{
                  fontWeight: "700",
                  color: "#393939",
                   fontSize:"15px"
                 
                }}
              >
                LÉGAL
              </li>
              {legal.map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: "400",
                    color: "#393939",
                     fontSize:"13px"
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              <li
                style={{
                  fontWeight: "700",
                  color: "#393939",
                   fontSize:"15px"
                }}
              >
                MON COMPTE
              </li>
              {monCompte.map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: "400",
                    color: "#393939",
                     fontSize:"13px"
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
            <div><h1 className="" style={{
                    fontWeight: "700",
                    color: "#393939",
                     fontSize:"15px"
                  }}>NOUS SUIVRE</h1></div>
            <div className="flex gap-1">
                <div className="border border-[#F5E1EB] rounded-md"><Image  className="p-2" 
                src="/images/Twitter.png" alt="L" width={30} height={15} style={{}} /></div>
                <div className="border border-[#F5E1EB] rounded-md"><Image  className="p-2" src="/images/instagramLogo.png" alt="L" width={30} height={15} /></div>
                <div className="border border-[#F5E1EB] rounded-md"><Image  className="p-2" src="/images/linkedin-inLogo.png" alt="L" width={30} height={15}/></div>
            </div>
        </div>
      </div>
    </div>
  );
}
