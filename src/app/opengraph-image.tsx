import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

// Image metadata
export const alt = 'Milan Madusanka - Full-Stack Developer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            padding: '60px',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              marginBottom: 20,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            Milan Madusanka
          </h1>
          <p
            style={{
              fontSize: 40,
              color: 'rgba(255, 255, 255, 0.95)',
              margin: 0,
              marginBottom: 30,
              fontWeight: 500,
            }}
          >
            Full-Stack Developer & DevOps Engineer
          </p>
          <div
            style={{
              display: 'flex',
              gap: 20,
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.9)',
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>Next.js</span>
            <span>•</span>
            <span>Laravel</span>
            <span>•</span>
            <span>DevOps</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          milanmadusanka.me
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
