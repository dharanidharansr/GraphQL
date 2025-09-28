import Tweet from "./models/Tweet.js";

const datasource = {
    getAllTweets: async () => {
        const ss = await Tweet.find();
        console.log("first", ss);
        return ss;
    }
};

export default datasource;