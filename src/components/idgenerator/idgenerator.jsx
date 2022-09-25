const idGenerator = {
    randomId(maxNumber) {
        return Math.round(Math.random() * maxNumber);
    },
};

export default idGenerator;