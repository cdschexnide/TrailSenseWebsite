import type { Metadata } from 'next'
import { company } from '@/lib/data/site-config'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for TrailSense mobile application and detection services.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-[1] border-b border-hairline">
        <div className="container-page py-24 md:py-32">
          <div className="max-w-[820px]">
            <div className="coords">
              <span className="khaki">PRIVACY POLICY</span>
              <span className="num">{'// LAST UPDATED 2026-04-06'}</span>
            </div>
            <h1 className="mb-7 font-display text-4xl font-extrabold leading-[0.96] tracking-display-tight text-fg-primary text-balance sm:text-5xl lg:text-6xl">
              Privacy policy.
            </h1>
            <p className="max-w-[640px] text-lg leading-relaxed text-fg-secondary">
              {company.legalName} (&quot;TrailSense,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the TrailSense mobile application and detection services. This document explains what we collect, why, how we store it, and the rights you have over it.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-hairline">
        <div className="container-page py-24">
          <div className="mx-auto max-w-[820px] space-y-12 text-fg-secondary leading-relaxed">
            <Section title="1. Information we collect">
              <Subsection title="Account information">
                <p>
                  When you create an account, we collect your email address, name, and password. Your password is cryptographically hashed and never stored in plain text.
                </p>
              </Subsection>
              <Subsection title="Device detection data">
                <p>
                  TrailSense detection units passively monitor RF signals to detect the presence of mobile devices on your property. The data we ingest from a unit includes:
                </p>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Signal strength (RSSI) and channel (wideband RF, WiFi, BLE)</li>
                  <li>Triangulated position estimates (latitude, longitude, accuracy)</li>
                  <li>Anonymized device fingerprint hashes derived from signal characteristics, not raw MAC addresses or device identifiers</li>
                  <li>Detection confidence scores and measurement counts</li>
                  <li>Behavioral signatures such as visit frequency, time of day, and duration of presence</li>
                </ul>
              </Subsection>
              <Subsection title="Location data">
                <p>
                  The mobile app requests location permission to display your property on a map and to enable geofencing. Your location is used to center map views and tag detection alerts geographically. Detection unit GPS coordinates are stored to associate alerts with specific locations on your property.
                </p>
              </Subsection>
              <Subsection title="Push notification tokens">
                <p>
                  If you enable push notifications, we collect a Firebase Cloud Messaging (FCM) token to deliver real-time alerts. This token is stored on our servers and used solely for notification delivery.
                </p>
              </Subsection>
              <Subsection title="App usage data">
                <p>
                  We collect basic usage events (screens viewed, features used) to improve the app. This is collected only when analytics is enabled in app settings and never includes detection data or personal information.
                </p>
              </Subsection>
            </Section>

            <Section title="2. How we use your information">
              <ul className="ml-6 list-disc space-y-2">
                <li><strong className="text-fg-primary">Provide security services:</strong> process detection signals, generate alerts, classify confidence, render property security status.</li>
                <li><strong className="text-fg-primary">Authenticate your account:</strong> verify identity and maintain secure sessions.</li>
                <li><strong className="text-fg-primary">Send notifications:</strong> deliver real-time alerts about property activity via push.</li>
                <li><strong className="text-fg-primary">Render maps:</strong> property maps, detection heatmaps, and unit locations.</li>
                <li><strong className="text-fg-primary">Improve the app:</strong> analyze opt-in usage patterns to fix issues and enhance features.</li>
              </ul>
            </Section>

            <Section title="3. Data storage and security">
              <p>
                Authentication tokens are stored in your device&apos;s encrypted secure storage (iOS Keychain / Android Keystore). App preferences and settings are stored locally on your device. Account data, detection history, and alerts are stored on our backend.
              </p>
              <p>
                Communication between the app and our servers is encrypted using HTTPS / TLS. WebSocket connections for real-time updates are authenticated and encrypted. Sessions automatically expire after 30 minutes of inactivity.
              </p>
            </Section>

            <Section title="4. Third-party services">
              <p>We use the following third-party services to operate parts of the platform:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  <strong className="text-fg-primary">Mapbox</strong> for map rendering. When you view maps in the app, tile requests including coordinates and zoom levels are sent to Mapbox. See <a href="https://www.mapbox.com/legal/privacy" className="text-gold underline" target="_blank" rel="noopener noreferrer">Mapbox Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-fg-primary">Firebase Cloud Messaging</strong> for push delivery. See <a href="https://firebase.google.com/support/privacy" className="text-gold underline" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a>.
                </li>
                <li>
                  <strong className="text-fg-primary">Golioth</strong> for unit telemetry transport over CoAP / DTLS, when configured. Telemetry is encrypted in transit.
                </li>
              </ul>
              <p>
                We do not sell, rent, or share your personal information with third parties for marketing. We do not use third-party advertising or behavioral tracking SDKs.
              </p>
            </Section>

            <Section title="5. Data regarding detected devices">
              <p>
                TrailSense detects the presence of mobile devices on your property by passively listening for RF signals. Important context:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Detection data consists of anonymized fingerprint hashes derived from signal characteristics, not personal identifiers of device owners.</li>
                <li>The detection unit never intercepts, decrypts, or stores the content of any communication.</li>
                <li>The platform does not identify the human owner of a detected device.</li>
                <li>Detection records are scoped to your account and not shared with other users.</li>
              </ul>
              <p>
                You are responsible for using TrailSense in compliance with applicable local, state, and federal law. We are not your lawyer.
              </p>
            </Section>

            <Section title="6. On-device AI assistant">
              <p>
                The mobile app includes an on-device large-language model that lets you query your detection history in plain language. Inference happens entirely on your phone. Your queries and the model&apos;s responses do not leave the device. No third-party AI provider sees your detection data through this feature.
              </p>
            </Section>

            <Section title="7. Your rights and choices">
              <ul className="ml-6 list-disc space-y-2">
                <li><strong className="text-fg-primary">Access and update:</strong> view and edit your profile inside the app.</li>
                <li><strong className="text-fg-primary">Delete your account:</strong> account deletion in app settings removes your account data from our servers.</li>
                <li><strong className="text-fg-primary">Manage notifications:</strong> toggle push delivery in app settings or system settings.</li>
                <li><strong className="text-fg-primary">Location permission:</strong> revoke at any time via system settings.</li>
                <li><strong className="text-fg-primary">Whitelist & block:</strong> mark known device fingerprints to suppress alerts, or block specific fingerprints from your feed.</li>
              </ul>
            </Section>

            <Section title="8. Data retention">
              <p>
                Detection data and alerts are retained while your account is active. Position-history samples are retained for 30 days. When you delete your account, your personal data is removed from our servers. Anonymized aggregate data may be retained for service improvement.
              </p>
            </Section>

            <Section title="9. Children&apos;s privacy">
              <p>
                TrailSense is not intended for use by anyone under 18. We do not knowingly collect personal information from children. If you believe a child has provided personal information, contact us so we can delete it.
              </p>
            </Section>

            <Section title="10. Changes to this policy">
              <p>
                We may update this policy. We will notify you of material changes via the app or email. Continued use after changes constitutes acceptance of the updated policy.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                Questions about this policy or our data practices, contact:
              </p>
              <p>
                <strong className="text-fg-primary">{company.legalName}</strong>
                <br />
                Email: <a href="mailto:privacy@trailsense.com" className="text-gold underline">privacy@trailsense.com</a>
              </p>
            </Section>
          </div>
        </div>
      </section>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 font-display text-2xl font-bold tracking-display-tight text-fg-primary">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="mb-2 font-display text-lg font-bold tracking-display-snug text-fg-primary">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
