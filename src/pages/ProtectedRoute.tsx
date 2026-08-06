import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function ProtectedRoute({ children }: any) {

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);


  useEffect(() => {

    const checkUser = async () => {

      const { data } = await supabase.auth.getUser();

      setUser(data.user);

      setLoading(false);

    };

    checkUser();

  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }


  if (!user) {
    return <Navigate to="/login" />;
  }


  return children;

}

export default ProtectedRoute;