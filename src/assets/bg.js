// This is to get around server side rendering limitations
setTimeout(()=>{
    setInterval(() => {
        
        if (!window.hasBackgroundRan && document.getElementById('featured-background') && VANTA && window.THREE && window.THREE.WebGL1Renderer) {
            try {
                setTimeout(()=>{
                    VANTA.NET({
                        el: "#featured-background",
                        mouseControls: true,
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
    
    // // Set heights on side-by-side cards
// setInterval(()=>{
//     const cards = document.querySelectorAll('.my-card');
//     for (const card of cards){
        
//         const cardContent = card.querySelector('.mat-card-content');
//         const cardSize = cardContent.clientHeight;
//         console.log(cardSize);
//         card.querySelector('h2').style.height = cardSize + 'px';
//         card.querySelector('h2').style.lineHeight = cardSize + 'px';
        
//     }
// }, 3000);