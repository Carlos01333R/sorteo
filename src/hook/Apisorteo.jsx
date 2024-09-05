import { useEffect, useState } from "react";
import Api from "./Api";

function ApiSorteo() {
  const [sorteos, setSorteos] = useState([]);
  const { supabase } = Api();

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("newsorteo").select();
    setSorteos(data);
  }

  return {
    sorteos,
    supabase,
  };
}

export default ApiSorteo;
