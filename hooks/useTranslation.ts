import { useRouter } from 'next/router'
import { en } from '../translations/en'
import { fr } from '../translations/fr'

const translations = {
  en,
  fr,
}

export const useTranslation = () => {
  const router = useRouter()
  const { locale } = router
  const t = translations[locale as keyof typeof translations]
  return { t }
} 