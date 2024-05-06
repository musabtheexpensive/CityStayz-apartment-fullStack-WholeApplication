import privateLoading from "./privateLogin.json";
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-[250px]">
        <Lottie loop={true} animationData={privateLoading} />
      </div>
    </div>
  );
};

export default Loading;
