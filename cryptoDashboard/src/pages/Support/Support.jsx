import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./component/SupportCard";
import ContactCard from "./component/ContactCard";
import { IoMail } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import InfoCard from "../Dashboard/components/InfoCard";

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
      <SupportCard
        icon={BiSolidMessageRounded}
        leftComponent={<InfoCard />}
        title={"Live Chat"}
        text={
          " Don’t have time to wait for the answer? Chat with us now."
        }
      />
    </DashboardLayout>
  );
};

export default Support;
