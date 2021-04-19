export const fetchOffersList = async () => {
    const RESPONSE = await fetch(
        "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory?epp=20",
    );
    return await RESPONSE.json();
};
