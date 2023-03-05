import { useEffect, useState } from "react";
import { getUser } from "../api";
import { Top, Center, Bottom } from "./layout/";

const Main = ({ input }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await getUser(input));
    };

    fetchAPI();
  }, [data]);

  return (
    <main className="bg-grayishBlue min-h-full my-6 px-4 sm:px-10 py-12 text-lightCyan rounded-md">
      <div className="flex flex-col sm:flex-row w-full justify-center gap-x-6">
        <Top data={data} />
      </div>

      <div className="w-full pt-8">
        <Center data={data} />

        <div className="grid sm:grid-cols-3 grid-cols-1 space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 text-center text-sm text-neonGreen">
          <Bottom data={data} />
        </div>
      </div>
    </main>
  );
};

export default Main;
