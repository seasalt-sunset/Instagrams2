class Sorting {

    static sortPosts(order, posts) {

        switch(order) {
            case "newest":
                    posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                break;
            case "oldest":

            break;
        default:
            break;
        }

        return posts;

    }
}

export default Sorting;