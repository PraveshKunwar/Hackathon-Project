import { NextPage } from "next";
import { useAuth } from "../util/auth";
import Index from ".";

const AddCovid: NextPage = () => {
  const { user } = useAuth();

  return (
    <div className="addcovid">
      {user ? <div className="addcovid">asdasdasd</div> : <Index />}
    </div>
  );
};
export default AddCovid;
