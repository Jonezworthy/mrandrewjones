// This is to get around server side rendering limitations
setInterval(() => {

    if (!window.hasBackgroundRan && document.getElementById('featured-background') && VANTA && window.THREE && window.THREE.WebGL1Renderer && window.THREE.Scene) {
        try {
            setTimeout(async () => {
                let isDesktop = false;
                try {
                    const battery = await navigator.getBattery();
                    if (battery.charging === true) {
                        isDesktop = true;
                    }
                } catch (err) {

                }

                console.log('isDesktop?:' + isDesktop);

                VANTA.NET({
                    el: "#featured-background",
                    mouseControls: false,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1,
                    scaleMobile: 2.00,
                    color: '#ffffff',
                    backgroundColor: '#242932',
                    maxDistance: (isDesktop ? 17 : 10),
                    points: (isDesktop ? 16 : 6),
                    spacing: (isDesktop ? 20 : 15),
                    THREE: window.THREE
                });
            },100)
            window.hasBackgroundRan = true;
            console.log('ran');
        } catch (err) {
            window.hasBackgroundRan = false;
        }
    }


    if (!(document.getElementById('featured-background'))) {
        window.hasBackgroundRan = false;
    }

}, 250);