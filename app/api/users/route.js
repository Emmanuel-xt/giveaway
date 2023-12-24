import { connectToDB } from "@utils/database";
import User from "@models/Users";
import { getCachedUsers, setCachedUsers } from "../cache";

let cachedUsers = null

export const GET = async (request) => {
  try {
    cachedUsers = getCachedUsers()
    if (cachedUsers !== null) {
      return new Response(JSON.stringify(cachedUsers), { status: 200 });
    }
    await connectToDB();

    const users = await User.find({});

    setCachedUsers(users)

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Fetch all Users", { status: 500 });
  }
};
