import React from 'react'
import VideoSrc from './video.mp4'
import useLocalStorage from './useLocalStorage'

export const Video = () => {
  const video = React.useRef<HTMLVideoElement>(null)
  const [textPausePlay, setTextPausePlay] = React.useState('Play')
  const [volume, setVolume] = useLocalStorage('volume', '0')

  React.useEffect(() => {
    console.log('Video component mounted', video);
    if (video.current) {
      video.current.volume = Number(volume)
    }
  }, [volume])

  function pausePlay(){
    if(video.current?.paused){
      video.current.play()
      setTextPausePlay('Pause')
    }else{
      video.current?.pause()
      setTextPausePlay('Play')
    }
  }

  function addTime() {
    if (video.current) {
      video.current.currentTime += 2
    }
  }

  function mute() {
    if (video.current) {
      video.current.muted = !video.current.muted
    }
  }

  function increaseSpeed() {
    if (video.current) {
      video.current.playbackRate += 1;
    }
  }
    
  return (
    <div style={{marginTop: '50px'}}>
      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={pausePlay}>{textPausePlay}</button>
        <button onClick={addTime}>+ 2s</button>
        <button onClick={mute}>Mute</button>
        <button onClick={increaseSpeed}>+1</button>
      </div>

      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={() => setVolume('0')}>0</button>
        <button onClick={() => setVolume('0.5')}>50</button>
        <button onClick={() => setVolume('1')}>100</button>
      </div>
      <video ref={video} src={VideoSrc} controls></video>
    </div>
  )
}
