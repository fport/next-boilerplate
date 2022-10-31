import Seo from '../infrastructure/components/seo'
import { useTranslation } from 'next-i18next'
import Card from '@comps/card'

export default function Home() {
    const { t } = useTranslation('mock')

    return (
        <>
            <Seo title="Home" />
            <Card />
            <h1 className="text-3xl font-bold underline text-orange">Hello world!</h1>
            <h2>{t('description')}</h2>
        </>
    )
}
