import images from "../imagesImort";

const initState ={
    images,
    info: {
        generalInfo: {
            fullName:  'Musayev Bezirgen',
            dateBirth:  '03.11.1989',
            desiredIncome:  '500$',
            address: {
                country: 'Belarus ',
                region: ' Brest ',
                city: ' Baranovichi ',
                strit: ' Parkovaya 52/18 '
            },
            eMail: 'bezirgenmusayew@gmail.com',
            education: {
                date: '2011-2016',
                faculty: 'English language and Informatics'
            },
            experience: {
                where: 'Baranovichi high school №16',
                byWhom: 'Software engineer',
                duties: [
                    'Server customization',
                    'Monitor the server',
                    'Web-programming course teacher(HTML5, CSS, sass, JavaScript, React.js)'
                ]
            },
            professionalSkills: [
                'HTML, CSS, SASS, JavaScript',
                'UI/UX',
                'React.js'
            ]
        }
    }
}

const resumeReducer =(state = initState, action)=>{
    switch (action.type) {
        default:
            return state;
    }
}

export default resumeReducer;