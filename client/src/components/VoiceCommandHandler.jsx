import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceCommandHandler = () => {
  const navigate = useNavigate();
  const commands = [
    {
      command: 'go to *',
      callback: (page) => {
        switch (page) {
          case 'home':
            navigate('/');
            break;
          case 'profile':
            navigate('/profile');
            break;
          case 'blogs':
            navigate('/blogs');
            break;
          case 'login':
            navigate('/login');
            break;
          case 'hangman':
            navigate('/hangman');
            break;
          case 'memory game':
            navigate('/memorygame');
            break;
          case 'articles':
            navigate('/articles');
            break;
          default:
            console.log(`No route found for ${page}`);
        }
      }
    }
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Browser doesn't support speech recognition.</div>;
  }

  return null;
};

export default VoiceCommandHandler;