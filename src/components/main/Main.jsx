import React from "react";
import DonationBlock from "../donation-block";
import Menu from "../menu";
import TabsBlock from "../tabs-block"
import './Main.scss';

const Main = () => {

  return (
    <section className="main_section">
      <div className="main_section-left">
        <DonationBlock />
        <TabsBlock />
      </div>
      <aside>
        <Menu />
      </aside>
    </section>
  )
}

export default Main;