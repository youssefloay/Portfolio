export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

export default function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
} 