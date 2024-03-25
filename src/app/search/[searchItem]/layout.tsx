import AppBar from '@/components/AppBar'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBar after={false} />
      {children}
    </>
  )
}
