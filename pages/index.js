import TesHeader from '../components/home/TesHeader'
import TesBanner from '../components/home/TesBanner'
import TesFooter from '../components/home/TesFooter'
import { withTranslation } from '../i18n'

const TesIndex = ({ t }) => {
    return (
        <>
            <TesHeader />
            <TesBanner />
            <TesFooter />
        </>
    )
}

export default withTranslation()(TesIndex)