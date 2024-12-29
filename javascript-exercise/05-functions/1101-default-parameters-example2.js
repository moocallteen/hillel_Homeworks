const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt, //implicit return
})

const defaultPost = {
    name: "Yarik",
    title: "Bachok potick",
    views: 0,
}

console.log(newPost(defaultPost))
console.log(defaultPost)

// https://youtu.be/CxgOKJh4zWE?si=z-pdZ1wwzm7ut3X4&t=18321

const newNews = (news, addedAt = Date()) => {
    let changedReads = {...news};
    changedReads.reads = addedAt;
    let newPost = {
        ...changedReads,
        addedAt,
    }
    return newPost
}

const defaultNews = {
    name: "News",
    title: "News title",
    reads: 0,
}

console.log(newNews(defaultNews))
// {
//     name: 'News',
//     title: 'News title',
//     reads: 'Thu Dec 26 2024 00:40:12 GMT+0100 (GMT+01:00)',
//     addedAt: 'Thu Dec 26 2024 00:40:12 GMT+0100 (GMT+01:00)'
//   }

console.log(defaultNews)