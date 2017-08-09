function applicationController(db) {
    this.getContactDetails = function (req, res) {

        var contactDetails = {
            'Direct': {
                Email: {
                    display: 'jonezy2004@hotmail.com'
                    , link: 'mailto:jonezy2004@hotmail.com'
                }
//                , Phone: {
//                    display: '07510 591 826'
//                    , link: 'tel:07510591826'
//                }
            }
            , 'Public profiles': {
                LinkedIn: {
                    link: 'https://www.linkedin.com/in/andrew-jones-408674b3'
                }
                , GitHub: {
                    link: 'https://github.com/Jonezworthy'
                }
            }

        };
console.log('hello');   
        res.send(JSON.stringify(contactDetails));
    };
}


module.exports = applicationController;
