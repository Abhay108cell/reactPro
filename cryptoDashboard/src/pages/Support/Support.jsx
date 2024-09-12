
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './component/SupportCard'
import ContactCard from './component/ContactCard'

const Support = () => {
  return (
    <DashboardLayout>
      <SupportCard leftComponent={<ContactCard/>}/>
    </DashboardLayout>
  )
}

export default Support
