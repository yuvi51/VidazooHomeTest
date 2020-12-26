__uspapi("getUSPData", 1, (uspData, success) => {
    if(success) {
        console.log(uspData);
    } else {
        console.log("there is no ccpa data");
    }
});