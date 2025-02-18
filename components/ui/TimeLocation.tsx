import {useEffect, useState} from 'react'

const TimeLocation = () => {
    
const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-AU', { timeZone: 'Australia/Adelaide', hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString('en-AU', { timeZone: 'Australia/Adelaide', hour: '2-digit', minute: '2-digit' }));
    }, 60000); // Update every minute
    return () => clearInterval(interval);
    }, []);

  return (
    <div className="mt-2 text-xs text-white z-20">
        <p>Adelaide, Australia - {currentTime}</p>
    </div>
  )
}

export default TimeLocation
