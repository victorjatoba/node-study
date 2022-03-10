const callMe = async (val) => {
    if(val) {
        return "I am resolved"
    } else {
        return "I am rejected"
    }
};

(async () => {
    const response = await callMe(true);
    console.log(response);
})();

