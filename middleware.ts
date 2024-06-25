// import { authMiddleware } from "@clerk/nextjs";
 
// export default authMiddleware({
//   publicRoutes: [
//     '/',
//     '/events/:id',
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing'
//   ],
//   ignoredRoutes: [
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing'
//   ]
// });
 
// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
 
//import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs';
// import { authMiddleware } from "@clerk/nextjs";
// export default authMiddleware({});


// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).)', '/', '/(api|trpc)(.)'],
// };

// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';



// export default clerkMiddleware((auth, req) => {
//   if (protectedRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).)', '/', '/(api|trpc)(.)'],
// };

import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

