import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ["/"],
});
 
export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.
 
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ]
};