const Terms = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Henk's services, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Service Description
            </h2>
            <p className="text-muted-foreground mb-4">
              Henk provides AI-powered voice agent services for telephone
              fundraising automation. Our service helps charities conduct
              natural conversations with donors and supporters.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                Use the service in compliance with applicable laws and
                regulations
              </li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>
                Ensure all provided information is accurate and up-to-date
              </li>
              <li>
                Respect the privacy and rights of individuals contacted through
                our service
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Prohibited Uses
            </h2>
            <p className="text-muted-foreground mb-4">
              You may not use our service:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>For any unlawful purpose or to solicit unlawful activity</li>
              <li>To harass, abuse, insult, harm, defame, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To interfere with or circumvent security features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-4">
              Henk shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of the
              service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Contact Information
            </h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, contact us at{" "}
              <a
                href="mailto:jerome@callhenk.com"
                className="text-primary hover:underline"
              >
                jerome@callhenk.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
