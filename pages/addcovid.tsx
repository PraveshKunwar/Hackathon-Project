import { NextPage } from "next";
import { useAuth } from "../util/auth";
import Index from ".";

const AddCovid: NextPage = () => {
  const { user } = useAuth();

  return (
    <div className="checkvc">
      {user ? <div className="checkvc">asdasdasd</div> : <Index />}
    </div>
  );
};
export default AddCovid;
