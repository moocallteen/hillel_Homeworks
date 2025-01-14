// object destructurization is used for extracting multiple properties from an object and assigning them to variables
const userProfile = {
    name: "John",
    commentsQty: 10,
    hasAssignedAggreement: true,
}

const { name, commentsQty, } = userProfile;
const { hasAssignedAggreement } = userProfile;


console.log(userProfile);
console.log(name);
console.log(commentsQty);
console.log(hasAssignedAggreement);