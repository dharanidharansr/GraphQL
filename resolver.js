import datasource from "./datasource.js";
const resolvers={
    Query:{
        getAllTweets: async()=>{
            return await datasource.getAllTweets();
        }
    }
};
export default resolvers;