import NextAuth from "next-auth";
import { authOptions } from "./auth.config"; // authOptions ko alag file me define karein

// NextAuth handler banayein
const handler = NextAuth(authOptions);

// HTTP methods ke saath export karein
export { handler as GET, handler as POST };
