export const fetchOffersList = async () => {
    const RESPONSE = await fetch(
        "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory?epp=20",
    );
    return await RESPONSE.json();
};

export const OrderOffertList = (list, order = "ascending") => {
    const DESCENDING_MODE_LIST = list.sort((a, b) => a.discount - b.discount);
    if (order === "ascending") return DESCENDING_MODE_LIST;
    return DESCENDING_MODE_LIST.reverse();
};
