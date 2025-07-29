const GDPR = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">GDPR Statement</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Our Commitment to GDPR</h2>
            <p className="text-muted-foreground mb-4">
              Henk is committed to protecting your personal data and respecting your privacy rights 
              in accordance with the General Data Protection Regulation (GDPR).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Legal Basis for Processing</h2>
            <p className="text-muted-foreground mb-4">We process your personal data based on:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Consent:</strong> When you explicitly agree to our processing</li>
              <li><strong>Contract:</strong> To fulfill our service obligations</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and communicate with you</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Your Rights Under GDPR</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Retention</h2>
            <p className="text-muted-foreground mb-4">
              We retain your personal data only for as long as necessary to fulfill the purposes 
              for which it was collected or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. International Transfers</h2>
            <p className="text-muted-foreground mb-4">
              When we transfer your data outside the EU, we ensure appropriate safeguards are in place 
              to protect your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Our Data Protection Officer</h2>
            <p className="text-muted-foreground">
              For any GDPR-related questions or to exercise your rights, contact us at{" "}
              <a href="mailto:hello@callhenk.com" className="text-primary hover:underline">
                hello@callhenk.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPR;