import React from "react";

export const OfferCard = ({
    name,
    dv_cashback: OFFER,
    dv_expires: EXPIRES,
    dv_address: ADDRESS,
}) => (
    <div className="Card">
        <img
            className="Card__Image"
            src="https://reworth-public-assets.s3-us-west-2.amazonaws.com/img/reworth-logo-white.png"
            alt="Logo Reworth"
            loading="lazy"
        />
        <div className="Card__Info">
            <h2 className="Card__InfoName">{name}</h2>
            <div className="Card__InfoOffer">
                <strong>{OFFER}</strong>
                <span>OFF</span>
            </div>
            <div className="Card__InfoExpires">{EXPIRES}</div>
            <div className="Card__InfoAddress">{ADDRESS}</div>
        </div>
    </div>
);
