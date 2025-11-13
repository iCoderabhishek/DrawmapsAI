
import React from 'react'

function Bgcolor({children}: {children: React.ReactNode}) {
  return (
   <div className="min-h-screen w-full relative">
  {/* Radial Gradient Background from Top */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #7c3aed 100%)",
    }}
  />
  {/* Your Content/Components */}

     {/* Your Content/Components */}
     {children}
</div>
  )
}

export default Bgcolor