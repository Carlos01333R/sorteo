import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://yrkzxtzclnhbyarwrpud.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlya3p4dHpjbG5oYnlhcndycHVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NTUzMDIsImV4cCI6MjA0MTEzMTMwMn0.CmjC-kV-09g-gU1sJH18qvRoANay_RsLxmhvJGpHwIQ"
);

function Api() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("sorteos").select();
    setCountries(data);
  }

  return {
    countries,
    supabase,
  };
}

export default Api;
