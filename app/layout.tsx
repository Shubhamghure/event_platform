import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently is a platform for event management.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}
console.log(process.env.NEXT_PUBLIC_CLERK_FRONTEND_API);
console.log(process.env.CLERK_API_KEY);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  )
  
}

// import type { Metadata } from 'next'
// import { Poppins } from 'next/font/google'
// import { ClerkProvider } from '@clerk/nextjs'

// import './globals.css'

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-poppins',
// })

// export const metadata: Metadata = {
//   title: 'Evently',
//   description: 'Evently is a platform for event management.',
//   icons: {
//     icon: '/assets/images/logo.svg'
//   }
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={poppins.variable}>{children}</body>
//       </html>
//     </ClerkProvider>
//   )
// }


// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
// import './globals.css'
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   )
// }