import React from "react";
// import { Sun } from "lucide-react";

const TermsOfService = () => {
  return (
    <section className='min-h-screen bg-gradient-to-br from-[#2026d3] to-blue-900 text-white px-6 py-20'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center mb-8'>
          {/* <Sun
            className='text-yellow-300 mr-3 animate-spin'
            style={{ animationDuration: "8s" }}
          /> */}
          <h1 className='text-4xl font-bold text-yellow-300'>
            ⚖️ Terms of Use for dsenergize.com
          </h1>
        </div>

        <p className='text-sm mb-4 opacity-80'>
          <strong>Update Date:</strong> 17-07-2025
          <br />
          <strong>Operated By:</strong> Fowlat Technologies Pvt. Ltd.
        </p>
        <p className='mb-6'>
          <strong>Trademark Notice:</strong> “DSEnergize” is a registered
          trademark and digital product developed by{" "}
          <strong>Fowlat Technologies Pvt. Ltd.</strong>, a company incorporated
          in Delhi under the Companies Act, 2013.
        </p>

        <div className='space-y-6 text-base leading-7'>
          <p>
            <strong>1. Acceptance of Terms</strong>
            <br />
            By accessing or using <strong>dsenergize.com</strong>, you agree to
            be bound by these Terms of Use, applicable laws, and regulations. If
            you do not agree with any part of these terms, you are prohibited
            from using this website or its services.
          </p>

          <p>
            <strong>2. Corporate Identity and Purpose</strong>
            <br />
            This website, DSEnergize, is owned and operated by{" "}
            <strong>Fowlat Technologies Pvt. Ltd.</strong>, whose primary
            business activities include:
            <ul className='list-disc ml-5 mt-2'>
              <li>
                Construction and maintenance of power, telecommunication, and
                transmission lines
              </li>
              <li>
                Sourcing, developing, and deploying monitoring systems and
                infrastructure services
              </li>
              <li>
                Research-driven technology integration for energy and solar
                analytics
              </li>
            </ul>
            These services fall under the scope described in Clause 3 of Fowlat
            Technologies' MOA.
          </p>

          <p>
            <strong>3. Use License</strong>
            <br />
            You are granted a limited, non-exclusive, and non-transferable
            license to access and view content for personal, non-commercial use.
            You may not:
            <ul className='list-disc ml-5 mt-2'>
              <li>Modify or copy any materials</li>
              <li>
                Use content for commercial redistribution or public display
              </li>
              <li>
                Reverse-engineer or replicate platform functions or dashboards
              </li>
              <li>Remove trademarks or copyright notices</li>
              <li>
                Mirror content from dsenergize.com elsewhere without permission
              </li>
            </ul>
            This license is revoked upon breach and may be terminated at the
            company’s discretion.
          </p>

          <p>
            <strong>4. Account Security and Passwords</strong>
            <br />
            You agree to maintain the confidentiality of your login credentials.
            Sharing credentials or unauthorized access to RMS services is
            strictly prohibited.
            <br />
            <ul className='list-disc ml-5 mt-2'>
              <li>
                Fowlat Technologies is not liable for data loss or service
                misuse from compromised passwords.
              </li>
              <li>
                Password requirements may be updated without prior notice.
              </li>
            </ul>
          </p>

          <p>
            <strong>5. Feature Availability</strong>
            <br />
            DSEnergize may introduce, modify, or remove features such as
            real-time alerts, Excel report exports, or WhatsApp integrations.
            Use of any new feature signifies agreement to updated terms relating
            to that feature.
          </p>

          <p>
            <strong>6. Intellectual Property</strong>
            <br />
            All dashboards, reports, software scripts, templates, data
            visualizations, and backend services are proprietary to{" "}
            <strong>Fowlat Technologies Pvt. Ltd.</strong> Users are not
            permitted to reuse, recompile, or distribute these elements without
            written authorization.
          </p>

          <p>
            <strong>7. Service Disclaimer</strong>
            <br />
            The content and services on <strong>dsenergize.com</strong> are
            provided “as is.” We do not warrant:
            <ul className='list-disc ml-5 mt-2'>
              <li>Accuracy or timeliness of solar performance data</li>
              <li>Error-free transmission of alerts or reports</li>
              <li>Compatibility with all device configurations</li>
              <li>Specific energy-saving outcomes</li>
            </ul>
            All warranties—express or implied—are disclaimed.
          </p>

          <p>
            <strong>8. Limitation of Liability</strong>
            <br />
            Fowlat Technologies Pvt. Ltd. shall not be held liable for:
            <ul className='list-disc ml-5 mt-2'>
              <li>System downtime or delayed notifications</li>
              <li>Loss of data, profits, or commercial opportunity</li>
              <li>
                Errors in third-party integrations (e.g., Excel, WhatsApp)
              </li>
            </ul>
            These limitations apply even if advised of potential issues.
          </p>

          <p>
            <strong>9. Third-Party Links</strong>
            <br />
            We may link to external services or tools, including cloud storage,
            messaging APIs, or energy platforms. These links do not imply
            endorsement, and we are not responsible for the content or privacy
            policies of external sites.
          </p>

          <p>
            <strong>10. Governing Law</strong>
            <br />
            This agreement is governed by the laws of{" "}
            <strong>Delhi, India</strong>. Users agree to submit to the
            exclusive jurisdiction of courts located in Delhi for any legal
            proceedings related to these terms.
          </p>

          <p>
            <strong>11. Corporate Disclosure</strong>
            <br />
            DSEnergize is a platform created and operated in accordance with the
            Memorandum of Association of{" "}
            <strong>Fowlat Technologies Pvt. Ltd.</strong>, under Clause 3
            objects including monitoring systems, technology partnerships, and
            scalable infrastructure development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
