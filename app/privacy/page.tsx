import { Metadata } from 'next'
import { company } from '@/lib/data/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy - TrailSense',
  description:
    'Privacy policy for TrailSense mobile application and services.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[920px]">
            <div className="coords">
              <span className="khaki">PRIVACY</span>
              <span className="num">{`// LAST UPDATED 2026-04-06`}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl">
              Privacy <span className="text-gold">Policy.</span>
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              {company.legalName} ("TrailSense," "we," "us," or "our") operates
              the TrailSense mobile application (the "App") and related
              services. This Privacy Policy explains how we collect, use,
              store, and protect your information when you use our App and
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="mx-auto max-w-[820px] space-y-16">
            <Section title="1. Information We Collect">
              <Subsection title="Account Information">
                <p>
                  When you create an account, we collect your email address,
                  name, and password. Your password is cryptographically hashed
                  and never stored in plain text.
                </p>
              </Subsection>

              <Subsection title="Device Detection Data">
                <p>
                  TrailSense detection units passively scan for nearby cellular,
                  WiFi, and Bluetooth signals to detect the presence of mobile
                  devices on your property. The data collected includes:
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Signal strength (RSSI) and signal type (cellular, WiFi,
                    Bluetooth)
                  </li>
                  <li>
                    Triangulated position estimates (latitude, longitude,
                    accuracy)
                  </li>
                  <li>
                    Device fingerprint hashes - anonymized identifiers derived
                    from signal characteristics. These are not raw MAC addresses
                    or device identifiers.
                  </li>
                  <li>Detection confidence scores and measurement counts</li>
                  <li>
                    Behavioral patterns such as visit frequency, time of day,
                    and duration of presence
                  </li>
                </ul>
                <p>
                  This data is used to generate alerts, classify threat levels,
                  and provide property security insights.
                </p>
              </Subsection>

              <Subsection title="Location Data">
                <p>
                  The App requests location permission to display your property
                  on a map and to enable geofencing features. Your location
                  data is used to center map views and provide geographic
                  context for detection alerts. Detection unit GPS coordinates
                  are stored to associate alerts with specific locations on
                  your property.
                </p>
              </Subsection>

              <Subsection title="Push Notification Tokens">
                <p>
                  If you enable push notifications, we collect a Firebase Cloud
                  Messaging (FCM) token to deliver real-time alerts to your
                  device. This token is stored on our servers and used solely
                  for notification delivery.
                </p>
              </Subsection>

              <Subsection title="App Usage Data">
                <p>
                  We collect basic usage events (such as screens viewed and
                  features used) to improve the App experience. This data is
                  collected only when analytics is enabled and does not include
                  personal information or detection data.
                </p>
              </Subsection>
            </Section>

            <Section title="2. How We Use Your Information">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-fg-primary">
                    Provide security services:
                  </strong>{' '}
                  Process detection signals, generate alerts, classify threat
                  levels, and display property security status.
                </li>
                <li>
                  <strong className="text-fg-primary">
                    Authenticate your account:
                  </strong>{' '}
                  Verify your identity and maintain secure sessions.
                </li>
                <li>
                  <strong className="text-fg-primary">
                    Send notifications:
                  </strong>{' '}
                  Deliver real-time alerts about property activity via push
                  notifications.
                </li>
                <li>
                  <strong className="text-fg-primary">Display maps:</strong>{' '}
                  Render property maps, detection heatmaps, and device
                  locations.
                </li>
                <li>
                  <strong className="text-fg-primary">Improve the App:</strong>{' '}
                  Analyze usage patterns to enhance features and fix issues.
                </li>
              </ul>
            </Section>

            <Section title="3. Data Storage and Security">
              <p>
                Authentication tokens are stored in your device's encrypted
                secure storage (iOS Keychain / Android Keystore). App
                preferences and settings are stored locally on your device.
                Account data, detection history, and alerts are stored on our
                secure servers.
              </p>
              <p>
                All communication between the App and our servers is encrypted
                using HTTPS/TLS. WebSocket connections for real-time updates
                are authenticated and encrypted.
              </p>
              <p>
                Your session automatically expires after 30 minutes of
                inactivity for security purposes.
              </p>
            </Section>

            <Section title="4. Third-Party Services">
              <p>
                We use the following third-party services that may process data
                on our behalf:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-fg-primary">Mapbox:</strong> Provides
                  map rendering. When you view maps in the App, map tile
                  requests including coordinates and zoom levels are sent to
                  Mapbox. See{' '}
                  <a
                    href="https://www.mapbox.com/legal/privacy"
                    className="text-gold underline underline-offset-2 hover:text-gold-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mapbox Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-fg-primary">
                    Firebase Cloud Messaging:
                  </strong>{' '}
                  Delivers push notifications. See{' '}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    className="text-gold underline underline-offset-2 hover:text-gold-hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase Privacy Policy
                  </a>
                  .
                </li>
              </ul>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. We do not use third-party
                advertising or tracking SDKs.
              </p>
            </Section>

            <Section title="5. Data Regarding Detected Devices">
              <p>
                TrailSense detects the presence of mobile devices on your
                property by passively scanning for radio signals. It is
                important to understand:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Detection data consists of anonymized fingerprint hashes, not
                  personal identifiers of device owners.
                </li>
                <li>
                  TrailSense does not intercept, read, or store the content of
                  any communications.
                </li>
                <li>
                  TrailSense does not identify the owner of a detected device.
                </li>
                <li>
                  Detected device data is associated with your account and is
                  not shared with other users.
                </li>
              </ul>
              <p>
                You are responsible for using TrailSense in compliance with
                applicable local, state, and federal laws regarding electronic
                detection and surveillance on your property.
              </p>
            </Section>

            <Section title="6. Your Rights and Choices">
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-fg-primary">
                    Access and update:
                  </strong>{' '}
                  You can view and update your profile information within the
                  App.
                </li>
                <li>
                  <strong className="text-fg-primary">
                    Delete your account:
                  </strong>{' '}
                  You can delete your account from the App settings, which
                  removes your account data from our servers.
                </li>
                <li>
                  <strong className="text-fg-primary">
                    Manage notifications:
                  </strong>{' '}
                  You can enable or disable push notifications in the App
                  settings or through your device's system settings.
                </li>
                <li>
                  <strong className="text-fg-primary">
                    Location permissions:
                  </strong>{' '}
                  You can revoke location access at any time through your
                  device's system settings.
                </li>
                <li>
                  <strong className="text-fg-primary">Known devices:</strong>{' '}
                  You can whitelist known devices to exclude them from alerts.
                </li>
                <li>
                  <strong className="text-fg-primary">Block devices:</strong>{' '}
                  You can block specific device fingerprints to hide them from
                  your alert feed.
                </li>
              </ul>
            </Section>

            <Section title="7. Data Retention">
              <p>
                Detection data and alerts are retained for as long as your
                account is active. Position history samples are retained for 30
                days. When you delete your account, your personal data is
                removed from our servers. Anonymized, aggregated data may be
                retained for service improvement.
              </p>
            </Section>

            <Section title="8. Children's Privacy">
              <p>
                TrailSense is not intended for use by anyone under the age of
                18. We do not knowingly collect personal information from
                children. If you believe a child has provided us with personal
                information, please contact us so we can delete it.
              </p>
            </Section>

            <Section title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes through the App or by email.
                Your continued use of the App after changes constitutes
                acceptance of the updated policy.
              </p>
            </Section>

            <Section title="10. Contact Us">
              <p>
                If you have questions about this Privacy Policy or our data
                practices, contact us at:
              </p>
              <p>
                <strong className="text-fg-primary">{company.legalName}</strong>
                <br />
                Email:{' '}
                <a
                  href="mailto:privacy@trailsense.com"
                  className="text-gold underline underline-offset-2 hover:text-gold-hover"
                >
                  privacy@trailsense.com
                </a>
              </p>
            </Section>
          </div>
        </div>
      </section>
    </>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-spaced text-gold">
        <span className="block h-px w-8 bg-gold" />
        {title.toUpperCase()}
      </div>
      <div className="space-y-4 text-base leading-relaxed text-fg-secondary">
        {children}
      </div>
    </div>
  )
}

function Subsection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 font-display text-lg font-bold tracking-display-snug text-fg-primary">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
