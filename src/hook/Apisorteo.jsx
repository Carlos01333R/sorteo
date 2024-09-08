import { useEffect, useState } from "react";
import Api from "./Api";

function ApiSorteo() {
  const [sorteos, setSorteos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { supabase } = Api();

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    setLoading(true);
    const { data } = await supabase.from("newsorteo").select();
    setSorteos(data);
    setLoading(false);
  }

  return {
    sorteos,
    loading,
    supabase,
  };
}

export default ApiSorteo;
