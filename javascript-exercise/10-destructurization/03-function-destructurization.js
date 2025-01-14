const userProfile = {
    name: "John",
    commentsQty: 10,
    hasAssignedAggreement: true,
}

const userAltProfile = {
    name: "Yarick",
    hasAssignedAggreement: true,
}

const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile));
console.log(userInfo(userAltProfile));

// https://youtu.be/CxgOKJh4zWE?si=G3bqFgkNHJd-H0ta&t=23647