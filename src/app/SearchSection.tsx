"use client";

import eTaxService from "./eTaxService";
import React from "react";
import { Shop } from "./types/Shop";
import ShopTable from "./ShopTable";

const SearchSection = () => {
  //   const [data, setData] = React.useState<Shop[]>([]);

  //   const fetchData = async () => {
  //     const data = await eTaxService.getData();
  //     setData(data);
  //   };

  //   React.useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div>
      <ShopTable />
    </div>
  );
};

export default SearchSection;