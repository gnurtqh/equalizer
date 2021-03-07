import { Paper, Slider, Typography } from "@material-ui/core";
import VolumeUp from "@material-ui/icons/VolumeUp";
import { useAudioContext } from "context/audioContext";
import { useState } from "react";

const Volume = () => {
  const { gainNode } = useAudioContext();
  const [volume, setVolume] = useState(1);
  const handleSliderChange = (event, newValue) => {
    setVolume(newValue);
    gainNode.gain.value = volume;
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "1em",
        flex: 2,
        alignItems: "center",
        padding: "0.3em",
        borderRadius: "999px",
      }}
    >
      <VolumeUp />
      <Slider
        style={{ flex: 2 }}
        min={0}
        max={1.98}
        step={0.02}
        value={volume}
        onChange={handleSliderChange}
      />
      <Typography variant="body2">{Math.round(50 * volume)}</Typography>
    </div>
  );
};

export default Volume;
