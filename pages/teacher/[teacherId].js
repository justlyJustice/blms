import Head from "@/components/Head";
import Layout from "@/components/dashboard/teacher/Layout";

import { logo } from "@/public/assets";
import TopBar from "@/components/dashboard/teacher/TopBar";

const Dashboard = () => {
  return (
    <Layout>
      <Head
        description="Teacher dasboard to manage class activities"
        image={logo}
        title="Dashboard | Teacher"
      />

      <div>
        <TopBar />
      </div>
    </Layout>
  );
};

export default Dashboard;
