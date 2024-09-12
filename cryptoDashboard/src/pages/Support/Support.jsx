import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./component/SupportCard";
import ContactCard from "./component/ContactCard";
import { IoMail } from "react-icons/io5";

const Support = () => {
  return (
    <DashboardLayout>
      <SupportCard
        icon={IoMail}
        leftComponent={<ContactCard />}
        title={"Contact Us"}
        text={
          " Have a question or just want to know more? Feel free to reach out to us."
        }
      />
    </DashboardLayout>
  );
};

export default Support;
