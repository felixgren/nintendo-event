const BowserSession = (arg1) => {
    let key = 'bowserMode';

    // If a value is supplied to the function, update.
    if (arg1 != null) {
        sessionStorage.setItem(`${key}`, `${JSON.stringify(arg1)}`);
        return JSON.parse(sessionStorage.getItem(`${key}`));
    }
    // If the session key does not exist. Create & set false.
    if (sessionStorage.getItem(`${key}`) === null) {
        sessionStorage.setItem(`${key}`, false);
        return JSON.parse(sessionStorage.getItem(`${key}`));
    }
    // Else return current state
    return JSON.parse(sessionStorage.getItem(`${key}`));
};

export default BowserSession;
