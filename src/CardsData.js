import React from "react";
import Cards from "./Cards";

function CardsData() {
  const cardDatas = [
    {
      id: 1,
      AboutPrice: "FREE",
      cost: "$0",
      month: "/month",
      available: [
        "Single User",
        "5GB Storage",
        "Unlimited Public Projects",
        "Community Access",
      ],
      notavailable: [
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports",
      ],
    },
    {
      id: 2,
      AboutPrice: "PLUS",
      cost: "$9",
      month: "/month",
      available: [
        "5 Users",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
      ],
      notavailable: ["Monthly Status Reports"],
    },
    {
      id: 3,
      AboutPrice: "PRO",
      cost: "$49",
      month: "/month",
      available: [
        "Unlimited Users",
        " 150GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Unlimited Free Subdomain",
        "Monthly Status Reports",
      ],
      notavailable: [],
    },
  ];

  const Cardsdesign = {
    display: "flex",
    paddingLeft: 250,
    paddingRight: 200,
    paddingTop: 50,
    gap: 30,
    transition: "all .25s linear",
  };

  return (
    <div style={Cardsdesign}>
      {cardDatas.map((product) => (
        <Cards cardDatas={product} />
      ))}
    </div>
  );
}
export default CardsData;
