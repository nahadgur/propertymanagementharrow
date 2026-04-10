import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Property Accountants Harrow — Vetted Property Tax Specialist Network'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: '#0f3320',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern — subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(39,118,73,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(39,118,73,0.15) 0%, transparent 50%)',
        }} />

        {/* Left accent bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '6px', background: '#277649',
        }} />

        {/* Content */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          padding: '64px 80px', flex: 1, position: 'relative', zIndex: 1,
        }}>

          {/* Top tag */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px',
          }}>
            <div style={{
              background: 'rgba(39,118,73,0.35)', color: '#7dd4a0',
              padding: '6px 16px', fontSize: '13px', fontFamily: 'sans-serif',
              fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>
              ACCA &amp; ICAEW Certified Network
            </div>
          </div>

          {/* Main headline */}
          <div style={{
            fontSize: '62px', fontWeight: 800, color: '#ffffff',
            lineHeight: 1.05, letterSpacing: '-0.02em',
            fontFamily: 'Georgia, serif', maxWidth: '780px', marginBottom: '28px',
          }}>
            Harrow&apos;s Property Tax Accountants.
          </div>

          {/* Sub */}
          <div style={{
            fontSize: '22px', color: 'rgba(255,255,255,0.55)',
            fontFamily: 'sans-serif', lineHeight: 1.5, maxWidth: '680px',
            marginBottom: 'auto',
          }}>
            Section 24 mitigation · SPV incorporation · CGT planning · Inheritance tax structuring
          </div>

          {/* Bottom row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px',
          }}>
            <div style={{
              fontSize: '20px', fontWeight: 700, color: '#ffffff',
              fontFamily: 'Georgia, serif', letterSpacing: '-0.01em',
            }}>
              PropertyAccountantsHarrow.co.uk
            </div>
            <div style={{
              display: 'flex', gap: '32px',
            }}>
              {['Free matching', '48hr introduction', 'No obligation'].map(item => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: 'rgba(255,255,255,0.5)', fontSize: '14px', fontFamily: 'sans-serif',
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#277649' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
