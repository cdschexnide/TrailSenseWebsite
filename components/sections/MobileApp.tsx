import Image from 'next/image'

const appScreens = [
  {
    name: 'Live Radar',
    description: 'Real-time visualization of detections with distance and threat level indicators',
    image: '/images/app/LiveRadar.png',
  },
  {
    name: 'Analytics Dashboard',
    description: 'Track detection patterns, peak hours, and device types over time',
    image: '/images/app/AnalyticsDashboard.png',
  },
  {
    name: 'Device Management',
    description: 'Monitor battery levels, signal strength, and detection counts across all units',
    image: '/images/app/Devices.png',
  },
  {
    name: 'Smart Alerts',
    description: 'Prioritized notifications with one-tap whitelist and threat management',
    image: '/images/app/Alerts.png',
  },
]

export function MobileApp() {
  return (
    <div className="bg-earth-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-400">
            Mobile Command Center
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Complete control from anywhere
          </p>
          <p className="mt-6 text-lg leading-8 text-earth-300">
            Monitor your property in real-time with our powerful mobile app. Get instant alerts,
            analyze patterns, and manage all your devices from a single intuitive interface.
          </p>
        </div>

        {/* App screenshots grid */}
        <div className="mx-auto mt-16 max-w-6xl sm:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {appScreens.map((screen) => (
              <div key={screen.name} className="flex flex-col items-center">
                {/* Phone mockup frame */}
                <div className="relative w-full max-w-[240px] aspect-[9/19] rounded-[2.5rem] bg-earth-800 p-2 ring-1 ring-earth-700 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-20 bg-earth-800 rounded-b-xl" />
                  <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-black">
                    <Image
                      src={screen.image}
                      alt={screen.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
                {/* Label */}
                <h3 className="mt-6 text-lg font-semibold text-white">{screen.name}</h3>
                <p className="mt-2 text-sm text-earth-400 text-center">{screen.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
