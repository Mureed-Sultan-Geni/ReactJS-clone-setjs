import React from "react";
import Approach from "../components/Home/Approach";
import FrameWorkBox from "../components/Home/FrameWorkBox";
import Intro from "../components/Home/Intro";
import TodoList from "../components/Home/TodoList";

function Home() {
  return (
    <>
      <Intro />
      <Approach />
      <div className="framework">

      <FrameWorkBox
        title="Minimal learning curve"
        description="Onboarding new developers is hard. We did not want anything that requires months of training. Also, if for some reason we decided to migrate to a new framework, the existing skills would be lost."
        /> <FrameWorkBox
        title="Minimal learning curve"
        description="Onboarding new developers is hard. We did not want anything that requires months of training. Also, if for some reason we decided to migrate to a new framework, the existing skills would be lost."
      /> <FrameWorkBox
      title="Minimal learning curve"
      description="Onboarding new developers is hard. We did not want anything that requires months of training. Also, if for some reason we decided to migrate to a new framework, the existing skills would be lost."
      /> <FrameWorkBox
      title="Minimal learning curve"
      description="Onboarding new developers is hard. We did not want anything that requires months of training. Also, if for some reason we decided to migrate to a new framework, the existing skills would be lost."
      />
      </div>
      <TodoList/>
    </>
  );
}

export default Home;
