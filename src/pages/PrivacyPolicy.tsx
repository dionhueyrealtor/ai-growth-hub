import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar pageTitle="Privacy Policy" />
      <main className="container mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          <strong>Effective Date:</strong> March 16, 2026
          <br />
          <strong>Company:</strong> AI EMPLOYEE FACTORY LLC
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="https://www.aiemployeefactory.com"
            className="text-primary underline hover:opacity-80"
          >
            https://www.aiemployeefactory.com
          </a>
          <br />
          <strong>Contact Email:</strong>{" "}
          <a
            href="mailto:info@aiemployeefactory.com"
            className="text-primary underline hover:opacity-80"
          >
            info@aiemployeefactory.com
          </a>
        </p>

        <div className="mt-12 space-y-10 text-foreground/90 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
            <p className="mt-3 text-muted-foreground">
              AI EMPLOYEE FACTORY LLC ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal information.
            </p>
            <p className="mt-2 text-muted-foreground">
              This Privacy Policy explains how information is collected, used, and protected when you visit{" "}
              <a href="https://www.aiemployeefactory.com" className="underline hover:opacity-80">
                https://www.aiemployeefactory.com
              </a>{" "}
              or interact with our services, including SMS communications.
            </p>
            <p className="mt-2 text-muted-foreground">
              By using this website or submitting information through forms, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="mt-3 text-muted-foreground">We may collect the following types of information.</p>

            <h3 className="mt-4 text-lg font-medium text-foreground">Personal Information You Provide</h3>
            <p className="mt-2 text-muted-foreground">
              When you interact with our website or services, you may voluntarily provide information including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Messages submitted through forms</li>
              <li>Business information</li>
              <li>Any other information you voluntarily submit</li>
            </ul>

            <h3 className="mt-4 text-lg font-medium text-foreground">Automatically Collected Information</h3>
            <p className="mt-2 text-muted-foreground">
              When you visit our website, certain technical information may be automatically collected, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Pages visited</li>
              <li>Date and time of visits</li>
              <li>Referring websites</li>
              <li>Interaction data</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
            <p className="mt-3 text-muted-foreground">The information we collect may be used to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Respond to inquiries or support requests</li>
              <li>Provide services or requested information</li>
              <li>Send updates, notifications, or communications you opted into</li>
              <li>Improve website performance and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Prevent fraud, abuse, or unauthorized access</li>
              <li>Maintain security of our systems</li>
            </ul>
            <p className="mt-3 font-medium text-foreground">We do not sell your personal information.</p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">4. SMS Messaging and Opt-In</h2>
            <p className="mt-3 text-muted-foreground">
              If you provide your phone number and consent to receive SMS messages from AI EMPLOYEE FACTORY LLC, the following applies.
            </p>

            <h3 className="mt-4 text-lg font-medium text-foreground">SMS Program Description</h3>
            <p className="mt-2 text-muted-foreground">SMS messages may include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Service updates</li>
              <li>Notifications</li>
              <li>Appointment reminders</li>
              <li>Customer support responses</li>
              <li>Marketing communications</li>
            </ul>

            <h3 className="mt-4 text-lg font-medium text-foreground">Message Frequency</h3>
            <p className="mt-2 text-muted-foreground">
              Message frequency may vary depending on your interaction with our services.
            </p>

            <h3 className="mt-4 text-lg font-medium text-foreground">Consent</h3>
            <p className="mt-2 text-muted-foreground">
              By submitting your phone number through our forms, you consent to receive SMS communications from AI EMPLOYEE FACTORY LLC.
            </p>
            <p className="mt-2 text-muted-foreground">
              Consent to receive SMS messages is not a condition of purchasing any goods or services.
            </p>

            <h3 className="mt-4 text-lg font-medium text-foreground">Opt-Out</h3>
            <p className="mt-2 text-muted-foreground">
              You may opt out at any time by replying <strong>STOP</strong> to any SMS message.
            </p>
            <p className="mt-2 text-muted-foreground">
              After sending STOP, you will receive a confirmation message and will no longer receive SMS communications unless you opt in again.
            </p>

            <h3 className="mt-4 text-lg font-medium text-foreground">Help</h3>
            <p className="mt-2 text-muted-foreground">
              For assistance, reply <strong>HELP</strong> to any SMS message or contact:{" "}
              <a href="mailto:info@aiemployeefactory.com" className="underline hover:opacity-80">
                info@aiemployeefactory.com
              </a>
            </p>

            <h3 className="mt-4 text-lg font-medium text-foreground">Message and Data Rates</h3>
            <p className="mt-2 text-muted-foreground">
              Standard message and data rates may apply depending on your mobile carrier.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. SMS Data Sharing (Critical Compliance Disclosure)
            </h2>
            <p className="mt-3 font-medium text-foreground">
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
            <p className="mt-2 text-muted-foreground">
              Information sharing with subcontractors providing support services (such as customer service or messaging platforms) is permitted only to the extent necessary to provide services.
            </p>
            <p className="mt-2 text-muted-foreground">
              All other use cases exclude text messaging originator opt-in data and consent. This information will not be shared with any third parties.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Cookies and Tracking Technologies</h2>
            <p className="mt-3 text-muted-foreground">
              Our website may use cookies or similar tracking technologies to enhance user experience and analyze website usage.
            </p>
            <p className="mt-2 text-muted-foreground">Cookies may collect information such as:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Website pages visited</li>
              <li>Time spent on pages</li>
              <li>Website traffic sources</li>
              <li>User interaction patterns</li>
            </ul>
            <p className="mt-2 text-muted-foreground">You may disable cookies through your browser settings.</p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Data Security Practices</h2>
            <p className="mt-3 text-muted-foreground">
              We implement reasonable administrative, technical, and organizational safeguards to protect personal information against unauthorized access, disclosure, alteration, or destruction.
            </p>
            <p className="mt-2 text-muted-foreground">These protections include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Secure website hosting</li>
              <li>Restricted access to data</li>
              <li>Security monitoring systems</li>
              <li>Use of trusted service providers</li>
            </ul>
            <p className="mt-2 text-muted-foreground">
              However, no method of internet transmission or storage is completely secure.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Sharing of Information</h2>
            <p className="mt-3 text-muted-foreground">
              We may share limited information with trusted service providers who help operate our business, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Website hosting providers</li>
              <li>Analytics services</li>
              <li>Email communication services</li>
              <li>SMS messaging platforms</li>
              <li>Customer support tools</li>
            </ul>
            <p className="mt-2 text-muted-foreground">
              These providers may only use your information to perform services on our behalf and are required to maintain confidentiality.
            </p>
            <p className="mt-3 font-medium text-foreground">
              We do not sell, rent, or share personal information for marketing purposes.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">9. Your Privacy Rights</h2>
            <p className="mt-3 text-muted-foreground">You have the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
              <li>Request access to your personal data</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of communications at any time</li>
            </ul>
            <p className="mt-2 text-muted-foreground">
              To exercise these rights, contact us at:{" "}
              <a href="mailto:info@aiemployeefactory.com" className="underline hover:opacity-80">
                info@aiemployeefactory.com
              </a>
            </p>
            <p className="mt-2 text-muted-foreground">
              You may also unsubscribe from SMS messages by replying <strong>STOP</strong>.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">10. Children's Privacy</h2>
            <p className="mt-3 text-muted-foreground">
              Our website and services are not directed toward individuals under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">11. Changes to This Privacy Policy</h2>
            <p className="mt-3 text-muted-foreground">
              We may update this Privacy Policy periodically. Updates will be posted on this page with a revised effective date.
            </p>
            <p className="mt-2 text-muted-foreground">
              Continued use of the website after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold text-foreground">12. Contact Information</h2>
            <p className="mt-3 text-muted-foreground">
              <strong className="text-foreground">AI EMPLOYEE FACTORY LLC</strong>
              <br />
              Website:{" "}
              <a href="https://www.aiemployeefactory.com" className="underline hover:opacity-80">
                https://www.aiemployeefactory.com
              </a>
              <br />
              Email:{" "}
              <a href="mailto:info@aiemployeefactory.com" className="underline hover:opacity-80">
                info@aiemployeefactory.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
