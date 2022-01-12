// This is to get around server side rendering limitations
setTimeout(()=>{
    setInterval(() => {
        
        if (!window.hasBackgroundRan && document.getElementById('featured-background') && VANTA && window.THREE && window.THREE.WebGL1Renderer) {
            try {
                setTimeout(()=>{
                    VANTA.NET({
                        el: "#featured-background",
                        mouseControls: false,
                        touchControls: false,
                        gyroControls: true,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 2.00,
                        color: '#ffffff',
                        backgroundColor: '#242932',
                        points: 16,
                        spacing: 20
                    });
                })
                window.hasBackgroundRan = true;
            } catch (err){
                window.hasBackgroundRan = false;            
            }
        }
        
        
        if (!(document.getElementById('featured-background'))) {
            window.hasBackgroundRan = false;
        }
        
    }, 250);
}, 1000);