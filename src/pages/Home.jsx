import Clients from "../components/clients";
import Contact from "../components/contact";
import Design from "../components/design";
import Erp from "../components/erp";
import IT_consulting from "../components/it";
import Main from "../components/main";
import Mobile from "../components/mobile";
import Optimization from "../components/optimization";
import Services from "../components/services";
import Team from "../components/team";
import Tools from "../components/tools";
import Work from "../components/work";
import Delever from "../projects/delever";
import Goodzone from "../projects/goodzone";
import Iman from "../projects/iman";
import Smsuz from "../projects/smsuz";

const Home = () => {
  return (
    <>
      <Main />
      <Services />
      <Team />
      <Mobile />
      <Erp />
      <Design />
      <Optimization />
      <IT_consulting />
      <Tools />
      <Clients />
      <Delever />
      <Smsuz />
      <Goodzone />
      <Iman />
      <Work />
      <Contact />
    </>
  );
};

export default Home;
