import React from "react";
import ReactPlayer from "react-player";
import { useState, useEffect, useRef } from "react";
import {
  AudioPreviousWhite,
  AudioPreviousBlack,
} from "../../SvgIconsComponents/AudioPrevious";
import {
  AudioNextWhite,
  AudioNextBlack,
} from "../../SvgIconsComponents/AudioNext";
import {
  AudioSecForwardBlack,
  AudioSecForwardWhite,
} from "../../SvgIconsComponents/AudioSecForward";
import {
  AudioSecPrevBlack,
  AudioSecPrevWhite,
} from "../../SvgIconsComponents/AudioSecPrev";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";

const IndividualMobilePlayer = ({
  url,
  playlist,
  playing,
  setPlaying,
  handlePlayPause,
  volume,
  playNextChapter,
  playPreviousChapter,
  currentAudioIndex,
  chapterData,
  previousDuration,
  playbackRate,
  speed,
  setSpeed,
}) => {
  const [progress, setProgress] = useState(0);
  // const [speed, setSpeed] = useState(1.0); // Initial playback speed
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
    // if (currentTime === duration) {
    //   setPlaying(false);
    // }
  };

  const buttonStyle = (value) => {
    return `rounded-full text-[13px] px-2 py-1 ${
      speed === value ? "text-black text-[20px] font-bold" : ""
    }`;
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
    <div className="individual_mobile_audio_player">
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
          volume={volume}
          playbackRate={playbackRate}
        />
        <div className="custom-controls">
          <div className="w-full mb-3 px-2">
            <div className="speed-buttons text-[20px] text-[#b1aeae] flex items-center justify-center pb-4 ">
              <button
                onClick={() => handleSpeedChange(1.0)}
                className={buttonStyle(1.0)}
              >
                1x
              </button>
              <button
                onClick={() => handleSpeedChange(2.0)}
                className={buttonStyle(2.0)}
              >
                2x
              </button>
              <button
                onClick={() => handleSpeedChange(3.0)}
                className={buttonStyle(3.0)}
              >
                3x
              </button>
            </div>
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
                <p className="text-[10px] text-[#2b2b2b]">
                  {formatTime(duration)}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#2b2b2b]">
                  - {formatTime(duration - currentTime)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-full my-2">
            {currentAudioIndex === 0 ? (
              <div>
                <button disabled className="no-cursor-allowed opacity-50">
                  <AudioPreviousBlack />
                </button>
              </div>
            ) : (
              <div>
                <button onClick={playPreviousChapter}>
                  <AudioPreviousBlack />
                </button>
              </div>
            )}

            <div>
              <div>
                <button onClick={skipBackward}>
                  <AudioSecPrevBlack />
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={handlePlayPause}
                className="h-[44px] w-[44px] bg-brandOrange text-white rounded-full flex justify-center items-center"
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
                <AudioSecForwardBlack />
              </button>
            </div>
            {currentAudioIndex === chapterData.length - 1 ? (
              <button disabled className="opacity-50 cursor-not-allowed">
                <AudioNextBlack />
              </button>
            ) : (
              <button onClick={playNextChapter}>
                <AudioNextBlack />
              </button>
            )}
            {/* <div>
              <button onClick={handleNextTrack}>
                <AudioNextBlack />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualMobilePlayer;
