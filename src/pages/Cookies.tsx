const Cookies = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Statement</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better user experience and allow certain features to function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
              <p className="text-muted-foreground mb-2">
                These cookies are necessary for the website to function and cannot be switched off. 
                They are usually set in response to actions you take.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Cookies</h3>
              <p className="text-muted-foreground mb-2">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
              <p className="text-muted-foreground mb-2">
                These cookies enable enhanced functionality and personalization, such as remembering 
                your preferences and settings.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Through your browser settings</li>
              <li>Using our cookie consent banner when you first visit</li>
              <li>By contacting us directly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We may use third-party services that place cookies on your device. These services 
              have their own cookie policies which we encourage you to review.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Updates to This Statement</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Cookie Statement from time to time. We will notify you of any 
              significant changes by posting the new statement on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about our use of cookies, please contact us at{" "}
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

export default Cookies;