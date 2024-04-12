import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="h-[100vh] flex items-center gap-12 justify-center bg-[#D8C4B6] ]">
        <div className="w-[40vw] p-9 rounded-3xl backdrop-blur-60 bg-opacity-50 shadow-lg bg-[#F5EFE7]">
          <h1 className="font-semibold text-[3vh] text-[#213555]">
            What is IntegriGuard?
          </h1>
          <p className="font-light text-[#213555] text-[1.8vh] pt-[2vh]">
            IntegriGuard is a cutting-edge web application revolutionizing
            supply chain management through the seamless integration of
            blockchain technology. This innovative platform is designed to
            enhance transparency, traceability, and efficiency throughout the
            entire supply chain, offering a secure and decentralized solution
            for businesses
          </p>
          <p className="font-light text-[#213555] text-[1.8vh] pt-[4vh]">
            IntegriGuard utilizes a decentralized blockchain network to record
            and verify every transaction and movement within the supply chain.
            This ensures a tamper-resistant and transparent ledger, reducing the
            risk of fraud and errors.
          </p>
        </div>
        <div className="w-[40vw] p-9 rounded-3xl bg-[#F5EFE7] backdrop-blur-60 bg-opacity-50 shadow-lg">
          <h1 className="font-semibold text-[#213555] text-[3vh]">
            What do we offer?
          </h1>
          <p className="font-light text-[1.8vh] text-[#213555] pt-[2vh]">
            IntegriGuard, a revolutionary web app for supply chain management,
            integrates blockchain for tamper-resistant transparency. Utilizing
            smart contracts, it automates processes, reducing costs and
            enhancing efficiency. Real-time visibility, supplier verification,
            and traceability empower businesses to make swift, informed
            decisions. The decentralized data storage ensures robust security
            against cyber threats, while cross-organizational collaboration
            fosters a seamless ecosystem. Customizable analytics offer
            actionable insights, making ChainGuard Pro the ultimate solution for
            modern businesses seeking a trustworthy, efficient, and transparent
            supply chain management platform.
          </p>
        </div>
      </div>
      <div className="bg-[#D8C4B6] flex items-center justify-center">
        <div className="w-[80vw] p-9 rounded-3xl backdrop-blur-60 bg-opacity-50 shadow-lg bg-[#F5EFE7]">
          <h1 className="font-semibold text-[4vh] text-[#213555] text-center">
            Features
          </h1>
          <h1 className="font-normal text-[#213555] pt-[2vh]">
            <b>Blockchain Integration:</b> IntegriGuard utilizes a decentralized
            blockchain network to record and verify every transaction and
            movement within the supply chain. This ensures a tamper-resistant
            and transparent ledger, reducing the risk of fraud and errors.
            <br />
            <br />
            <b>Smart Contracts:</b> The application leverages smart contracts to
            automate and enforce contractual agreements between parties involved
            in the supply chain. This not only streamlines processes but also
            eliminates the need for intermediaries, reducing costs and potential
            delays.
            <br />
            <br />
            <b>Real-time Visibility:</b> Gain comprehensive real-time visibility
            into the entire supply chain from raw material sourcing to end
            product delivery. Track the status of shipments, monitor inventory
            levels, and identify bottlenecks promptly, allowing for quick
            decision-making.
            <br />
            <br />
            <b>Supplier Verification:</b> IntegriGuard incorporates blockchain
            to verify and authenticate suppliers, ensuring that only authorized
            and reputable partners are part of the supply chain network. This
            enhances trust and mitigates the risk of dealing with unreliable
            sources.
            <br />
            <br />
            <b>Traceability:</b> Utilize the power of blockchain to trace the
            origin and journey of each product within the supply chain. This not
            only aids in compliance with regulatory requirements but also
            enables businesses to address issues such as recalls or quality
            control more efficiently.
            <br />
            <br />
            <b>Decentralized Data Storage:</b> Eliminate the vulnerability
            associated with centralized data storage by distributing information
            across the blockchain network. This enhances data security and
            resilience against cyber threats, ensuring the integrity of crucial
            supply chain data.
            <br />
            <br />
            <b>Cross-Organizational Collaboration:</b> Facilitate seamless
            collaboration among different stakeholders in the supply chain. The
            decentralized nature of IntegriGuard allows for secure and efficient
            communication and data sharing, fostering a collaborative ecosystem.
            <br />
            <br />
            <b>Customizable Analytics:</b> Leverage advanced analytics tools
            integrated into the platform to derive actionable insights from the
            wealth of data collected. Make informed decisions, optimize
            processes, and identify opportunities for cost savings and
            efficiency improvements.
            <br />
            <br />
          </h1>
        </div>
      </div>
      <div>
        <div className="bg-[#D8C4B6] flex items-center pt-[10vh] justify-center">
          <div className="flex">
            <div className="w-[80vw] p-9 rounded-3xl backdrop-blur-60 bg-opacity-50 shadow-lg bg-[#F5EFE7]">
              <h1 className="font-semibold text-[4vh] text-[#213555] text-center">
                Track progress
              </h1>
              <div className="flex justify-between py-[3vw]">
                <NavLink
                  to="/teams/team1"
                  className="rounded-lg bg-[#213555] py-[2vw] px-[5vw] hover:bg-[#335284] text-[#F5EFE7]"
                >
                  team1
                </NavLink>
                <NavLink
                  to="/teams/team2"
                  className="rounded-lg bg-[#213555] py-[2vw] px-[5vw] hover:bg-[#335284] text-[#F5EFE7]"
                >
                  team2
                </NavLink>
                <NavLink
                  to="/teams/team3"
                  className="rounded-lg bg-[#213555] py-[2vw] px-[5vw] hover:bg-[#335284] text-[#F5EFE7]"
                >
                  team3
                </NavLink>
                <NavLink
                  to="/teams/team4"
                  className="rounded-lg bg-[#213555] py-[2vw] px-[5vw] hover:bg-[#335284] text-[#F5EFE7]"
                >
                  team4
                </NavLink>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
