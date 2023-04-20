import HomeNav from "../../components/HomeNav";
import Subjects from "../../components/Subjects";
import Timers from "../../components/Timers";

const Demotest = () => {
  return (
    <div className="bg-lightColor pb-10">
      <form>
        <HomeNav />
        <Subjects />
        <Timers />
      </form>
      <div className="my-3 flex mx-10 md:mx-20 md:my-[3rem]">
        <a
          href="/demotest"
          className="text-lightColor md:text-[1.2rem] md:hover:bg-hoverColor font-bold  bg-buttonColor px-10 py-2 rounded-lg md:px-20 md:py-[0.8rem] drop-shadow-lg"
        >
          Start Test
        </a>
      </div>
    </div>
  );
};

export default Demotest;
