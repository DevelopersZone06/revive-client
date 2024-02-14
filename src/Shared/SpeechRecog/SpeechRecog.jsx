import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'; 


const SpeechRecog = () => {

    const startListenning = () => SpeechRecognition.startListening({ continuous: true, language: 'en' }); 

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition(); 

    if (!browserSupportsSpeechRecognition) {
        return null
      }

      console.log({transcript});
    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br />
                <p>A React hook that converts speech from the microphone to text and makes it available to your React
                components.</p>

                <div className="max-w-3xl w-full min-h-[400px] h-auto p-4 relative resize-none shadow-lg bg-[#FFFFFF] border-2 rounded-lg">
                    {transcript}
                </div>

                <div className="btn-style">

                    <button>
                        Copy
                    </button>
                    <button onClick={startListenning}>Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default SpeechRecog;