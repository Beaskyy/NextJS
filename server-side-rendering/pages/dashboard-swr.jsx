import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR(("Dashboard", fetcher));

  if (error) return "An error has occured";
  if (!data) return "Loading...";
  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Posts - {data?.posts}</h4>
      <h4>Likes - {data?.likes}</h4>
      <h4>Followes - {data?.followers}</h4>
      <h4>Following - {data?.following}</h4>
    </div>
  );
};

export default DashboardSWR;
