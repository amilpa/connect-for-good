import Layout from "@/components/Navbar/layout";
export default function dashboard() {
  return (
    <div className="pt-8">
      <h1 className="text-4xl font-semibold">Events</h1>
    </div>
  );
}

dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
