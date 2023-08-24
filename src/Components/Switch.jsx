import { useEffect, useState } from "react";

const Switch = () => {

    const [isLight, setIsLight] = useState('dark')

    useEffect(() => {

        document.body.setAttribute('data-theme', isLight);

    }, [isLight]);

    const handleChange = (e)=> setIsLight(e.target.checked ? 'light' : 'dark');

    return (
       <>
        <div  className="container-switch">
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={isLight === 'light'} />
                <span className="slider"></span>
            </label>
        </div>
       </>
        
    )
}
export default Switch