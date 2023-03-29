import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Metronome = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [bars, setBars] = useState(4);
  const [currentBeat, setCurrentBeat] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (currentBeat === bars) {
      setCurrentBeat(0);
    }
  }, [currentBeat, bars]);

  const handleToggle = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
    } else {
      const intervalTime = (60 / bpm) * 1000;
      intervalRef.current = setInterval(() => {
        setCurrentBeat((currentBeat) => (currentBeat + 1) % (bars + 1));
      }, intervalTime);
    }
    setIsPlaying(!isPlaying);
  };

  const handleDecrease = () => {
    setBpm(Math.max(bpm - 5, 20));
  };

  const handleIncrease = () => {
    setBpm(Math.min(bpm + 5, 300));
  };

  const handleBarsDecrease = () => {
    setBars(Math.max(bars - 1, 1));
    setCurrentBeat(0);
  };

  const handleBarsIncrease = () => {
    setBars(Math.min(bars + 1, 16));
    setCurrentBeat(0);
  };

  const renderBars = () => {
    const barArray = Array(bars).fill(0);
    return (
      <View style={{ flexDirection: 'row' }}>
        {barArray.map((_, index) => (
          <View
            key={index}
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              marginHorizontal: 4,
              backgroundColor: index === currentBeat ? 'green' : 'black',
            }}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 48 }}>{bpm}</Text>
      {renderBars()}
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <TouchableOpacity onPress={handleDecrease}>
          <Text style={{ fontSize: 24 }}>{'\u2212'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 16 }} onPress={handleToggle}>
          <Text style={{ fontSize: 24 }}>{isPlaying ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIncrease}>
          <Text style={{ fontSize: 24 }}>{'+'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <TouchableOpacity onPress={handleBarsDecrease}>
          <Text style={{ fontSize: 24 }}>{'\u2212'}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 24, marginHorizontal: 16 }}>{bars} bars</Text>
        <TouchableOpacity onPress={handleBarsIncrease}>
          <Text style={{ fontSize: 24 }}>{'+'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Metronome;
