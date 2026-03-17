import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar pageTitle="Terms of Service" />

      <main className="container mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Terms of Service</h1>

        <div className="mt-4 space-y-1 text-sm text-muted-foreground">
          <p><strong className="text-foreground">Effective Date:</strong> March 16, 2026</p>
          <p><strong className="text-foreground">Company:</strong> AI EMPLOYEE FACTORY LLC</p>
          <p><strong className="text-foreground">Website:</strong>{" "}
            <a href="https://www.aiemployeefactory.com" className="underline hover:text-foreground">https://www.aiemployeefactory.com</a>
          </p>
          <p><strong className="text-foreground">Contact Email:</strong>{" "}
            <a href="mailto:info@aiemployeefactory.com" className="underline hover:text-foreground">info@aiemployeefactory.com</a>
          </p>
        </div>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using the website{" "}
              <a href="https://www.aiemployeefactory.com" className="underline hover:text-foreground">https://www.aiemployeefactory.com</a>{" "}
              ("Website") operated by AI EMPLOYEE FACTORY LLC, you agree to be bound by these Terms of Service.
            </p>
            <p className="mt-2">If you do not agree with these terms, please do not use the Website or subscribe to any services, including SMS messaging programs.</p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">2. Age Requirement</h2>
            <p className="mt-2">The services offered on this Website, including participation in SMS messaging programs, are intended for individuals 18 years of age or older.</p>
            <p className="mt-2">By using the Website or opting into SMS communications, you confirm that you are at least 18 years old.</p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">3. Website Use</h2>
            <p className="mt-2">You agree to use this Website only for lawful purposes and in accordance with these Terms.</p>
            <p className="mt-2">You agree not to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Attempt to gain unauthorized access to the Website</li>
              <li>Interfere with website functionality</li>
              <li>Transmit malware or malicious software</li>
              <li>Use the Website for unlawful, fraudulent, or abusive activities</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">4. Intellectual Property</h2>
            <p className="mt-2">All content on this Website—including text, graphics, logos, and other materials—is the property of AI EMPLOYEE FACTORY LLC unless otherwise stated and is protected by intellectual property laws.</p>
            <p className="mt-2">Content may not be copied, reproduced, distributed, or used for commercial purposes without written permission.</p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">5. SMS Messaging Program</h2>

            <h3 className="mt-4 font-semibold text-foreground">5.1 Program Description</h3>
            <p className="mt-2">AI EMPLOYEE FACTORY LLC offers an SMS messaging program that sends promotional and marketing messages to users who voluntarily opt in.</p>
            <p className="mt-2">Messages may include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Special offers</li>
              <li>Discounts</li>
              <li>Event promotions</li>
              <li>Service announcements</li>
              <li>Marketing updates</li>
            </ul>
            <p className="mt-2">
              Users opt into receiving marketing messages through a separate, optional marketing consent checkbox within the website chat widget located at:{" "}
              <a href="https://www.aiemployeefactory.com" className="underline hover:text-foreground">https://www.aiemployeefactory.com</a>
            </p>
            <p className="mt-2">Marketing messages are only sent after express written consent is provided and are not combined with transactional consent.</p>

            <h3 className="mt-4 font-semibold text-foreground">5.2 Message Frequency</h3>
            <p className="mt-2">Message frequency may vary depending on marketing campaigns, promotions, and user engagement.</p>

            <h3 className="mt-4 font-semibold text-foreground">5.3 Opt-Out Instructions</h3>
            <p className="mt-2">You may opt out of receiving SMS messages at any time.</p>
            <p className="mt-2">To unsubscribe, reply <strong className="text-foreground">STOP</strong> to any text message you receive from us.</p>
            <p className="mt-2">After sending STOP, you will receive a confirmation message and will no longer receive SMS messages unless you opt in again.</p>

            <h3 className="mt-4 font-semibold text-foreground">5.4 Help and Support</h3>
            <p className="mt-2">For assistance regarding SMS messages, reply <strong className="text-foreground">HELP</strong> to any message.</p>
            <p className="mt-2">
              You may also contact us at:{" "}
              <a href="mailto:info@aiemployeefactory.com" className="underline hover:text-foreground">info@aiemployeefactory.com</a>
            </p>

            <h3 className="mt-4 font-semibold text-foreground">5.5 Message and Data Rates</h3>
            <p className="mt-2">Message and data rates may apply depending on your mobile carrier and messaging plan.</p>

            <h3 className="mt-4 font-semibold text-foreground">5.6 Carrier Liability Disclaimer</h3>
            <p className="mt-2">Mobile carriers are not liable for delayed or undelivered messages.</p>
            <p className="mt-2">Message delivery may be affected by your carrier, mobile device, network availability, or other factors outside our control.</p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">6. Sample SMS Messages</h2>
            <p className="mt-2">Below are examples of messages users may receive after opting in:</p>

            <div className="mt-4 rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground">Sample Message 1</p>
              <p className="mt-2">Hi Tom! This is AI EMPLOYEE FACTORY LLC. We're excited to have you as a valued member! Don't miss out on this chance to join the Strategic Business Growth Challenge at https://www.aiemployeefactory.com/</p>
              <p className="mt-2 text-xs">Message & data rates may apply. Reply STOP to unsubscribe.</p>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-card p-4">
              <p className="font-semibold text-foreground">Sample Message 2</p>
              <p className="mt-2">Hello Mary! This is AI EMPLOYEE FACTORY LLC. Don't miss our latest offers and updates—you can check them out at https://www.aiemployeefactory.com/</p>
              <p className="mt-2 text-xs">Message frequency varies. Message & data rates may apply. Reply STOP to unsubscribe.</p>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">7. Privacy</h2>
            <p className="mt-2">Your privacy is important to us.</p>
            <p className="mt-2">
              Information collected through the Website and SMS program is handled according to our Privacy Policy, available at:{" "}
              <a href="/privacy-policy" className="underline hover:text-foreground">https://www.aiemployeefactory.com/privacy-policy</a>
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">8. Limitation of Liability</h2>
            <p className="mt-2">To the fullest extent permitted by law, AI EMPLOYEE FACTORY LLC shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Website or participation in our messaging program.</p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">9. Modifications to Terms</h2>
            <p className="mt-2">We reserve the right to modify these Terms of Service at any time.</p>
            <p className="mt-2">Updates will be posted on this page with a revised effective date.</p>
            <p className="mt-2">Continued use of the Website after changes are posted constitutes acceptance of the updated Terms.</p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground">10. Contact Information</h2>
            <p className="mt-2">If you have questions about these Terms of Service, please contact:</p>
            <div className="mt-2 space-y-1">
              <p className="font-semibold text-foreground">AI EMPLOYEE FACTORY LLC</p>
              <p>
                Website:{" "}
                <a href="https://www.aiemployeefactory.com" className="underline hover:text-foreground">https://www.aiemployeefactory.com</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@aiemployeefactory.com" className="underline hover:text-foreground">info@aiemployeefactory.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
