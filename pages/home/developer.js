import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import developer from '../../public/developer.json'

export default function Devloper() {
  return (
    <Lottie
      loop
      animationData={developer}
      play
    />
  )
}