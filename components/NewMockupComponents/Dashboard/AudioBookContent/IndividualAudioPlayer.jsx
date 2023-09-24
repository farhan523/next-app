import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect, useRef } from "react";
import { AudioPreviousWhite } from "../../SvgIconsComponents/AudioPrevious";
import { AudioNextWhite } from "../../SvgIconsComponents/AudioNext";
import { AudioSecForwardWhite } from "../../SvgIconsComponents/AudioSecForward";
import { AudioSecPrevWhite } from "../../SvgIconsComponents/AudioSecPrev";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

const IndividualAudioPlayer = ({
  url,
  playlist,
  playing,
  setPlaying,
  handlePlayPause,
  IndividualAudioPlayer,
  volume,
  playNextChapter,
  playPreviousChapter,
  currentAudioIndex,
  chapterData,
  previousDuration,
  playbackRate,
}) => {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1.0); // Initial playback speed
  const [duration, setDuration] = useState(0); // Total duration in seconds
  const [currentTime, setCurrentTime] = useState(0); // Current playback time in seconds
  const [seekToTime, setSeekToTime] = useState(null); // Time to seek to (in seconds)
  const [currentTrackIndex, setCurrentTrackIndex] = useState("");
  const [played, setPlayed] = useState(previousDuration);
  const [inputValue, setInputValue] = useState("");

  const playerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (playerRef.current && previousDuration > 0) {
      playerRef.current.seekTo(parseFloat(previousDuration));
      let e = { target: { value: previousDuration } };
      handleSeek(e);
      // setPlayed(previousDuration);
    }
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(currentTime, "seconds");
    }
    setInputValue(inputRef.current.value);

    // setPlayed(currentTime);
    // if (Math.abs(currentTime - duration) < 1) {
    //   handleNextTrack();
    //   setCurrentTime(0);
    // }

    return () => {
      let localData = localStorage.getItem("recentPlayAudio");
      localStorage.removeItem("recentPlayAudio");
      localData = JSON.parse(localData);

      localData.playedDuration = inputValue;
      localStorage.setItem("recentPlayAudio", JSON.stringify(localData));
    };
  }, [currentTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    if (currentTime === duration) {
      setPlaying(false);
    }
  };

  const buttonStyle = (value) => {
    return `rounded-full px-2 py-1 ${speed === value ? "bg-[#CBE1F0]" : ""}`;
  };

  const handlePlayerProgress = (state) => {
    if (!seekToTime) {
      setProgress(state.played);
      setCurrentTime(state.playedSeconds);
      setPlayed(state.played);

      const remainingTime = duration - state.playedSeconds;

      if (remainingTime === 0) {
        setPlaying(false);
      }
    }
    // if (currentTime === duration) {
    //   setPlaying(false);
    // }
    // setProgress(state.played);
    // setCurrentTime(state.playedSeconds);
  };

  const handlePlayerDuration = (duration) => {
    setDuration(duration);
  };

  const skipForward = () => {
    // Add 30 seconds to the current playback time
    setCurrentTime((prevTime) => prevTime + 30);
  };

  const skipBackward = () => {
    setCurrentTime((prevTime) => prevTime - 30);
  };

  const handleSeek = (e) => {
    if (playerRef.current) {
      // Calculate the seek time based on the value of the range input
      const seekTime = e.target.value;

      // Seek to the calculated time
      playerRef.current.seekTo(parseFloat(seekTime));
    }
  };

  return (
    <div className="mobile_audio_player">
      <div className="player-wrapper">
        <ReactPlayer
          ref={playerRef}
          className="react-player hidden"
          // url={playlist[currentTrackIndex]}
          url={url}
          width="100%"
          controls={false}
          playing={playing}
          onProgress={handlePlayerProgress}
          onDuration={handlePlayerDuration}
          playbackRate={playbackRate}
          volume={volume}
          loop={false}
        />
        <div className="custom-controls">
          <div className="flex justify-evenly items-center w-full my-2">
            <div>
              {currentAudioIndex === 0 ? (
                <button disabled className="opacity-50 cursor-not-allowed">
                  <AudioPreviousWhite />
                </button>
              ) : (
                <button onClick={playPreviousChapter}>
                  <AudioPreviousWhite />
                </button>
              )}
            </div>
            <div>
              <div>
                <button onClick={skipBackward}>
                  <AudioSecPrevWhite />
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={handlePlayPause}
                className="h-[44px] w-[44px] bg-[#FFFFFF] text-brandOrange rounded-full flex justify-center items-center"
              >
                {playing ? (
                  <div className="h-full w-full flex items-center justify-center">
                    <BsPauseFill size={33} />
                  </div>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <BsPlayFill size={33} />
                  </div>
                )}
              </button>
            </div>
            <div>
              <button onClick={skipForward}>
                <AudioSecForwardWhite />
              </button>
            </div>
            <div>
              {currentAudioIndex === chapterData.length - 1 ? (
                <button disabled className="opacity-50 cursor-not-allowed">
                  <AudioNextWhite />
                </button>
              ) : (
                <button onClick={playNextChapter}>
                  <AudioNextWhite />
                </button>
              )}
            </div>
          </div>
          <div className="w-full my-3">
            {/* <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${progress * 100}%` }}
              ></div>
            </div> */}

            <div className="inputRange">
              <input
                ref={inputRef}
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={played}
                onChange={handleSeek}
                className="w-full"
              />
            </div>

            <div className="w-full flex justify-between">
              <div className="time-info">
                <p className="text-[10px] text-[#F0F0F0]">
                  {formatTime(duration)}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#F0F0F0]">
                  - {formatTime(duration - currentTime)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualAudioPlayer;
