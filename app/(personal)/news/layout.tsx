import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Latest News & Updates | #HASH 2027 CONTINUITY',
  description: 'Read the latest news, legislative updates, and community achievements of Hon. Hassan Shehu Hussain in Nasarawa Federal Constituency. Join the #HASH 2027 CONTINUITY movement.',
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
