import { Header } from "../../components/common";

import { HomeProvider } from "../../_context/Home";

import ChildrenRoutes from "../../routes/children";

const Home = () => {
  return (
    <HomeProvider>
      <Header />
      <ChildrenRoutes />
    </HomeProvider>
  );
};

export default Home;
