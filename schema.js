const schema = `#graphql
type Tweet {
    id: ID
    content: String
    likes: Int
    author: User
    comment: String
}
type User {
    id: ID
    name: String
    username: String
    email: String
    password: String
    tweet: [Tweet]
}
type Query {
    getAllTweets: [Tweet] # Get all tweets
}  
`;
//Basic DTypes={ID, String, Integer, Float, Boolean}
export default schema;