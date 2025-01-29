import MultiTasking from "../../helpers/multi-tasking.json";
import Lottie from "react-lottie";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: MultiTasking,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const LottieAnimation = () => <Lottie options={defaultOptions} />

  export default LottieAnimation;