import { NextPage } from "next";
import { useAuth } from "../util/auth";
import { useRouter } from "next/router";
import redirect from "nextjs-redirect";
import Index from ".";

const CheckVaccine: NextPage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <div className="checkvc">
      {user ? <div className="checkvc">asdasdasd</div> : <Index />}
    </div>
  );
};

export default CheckVaccine;
