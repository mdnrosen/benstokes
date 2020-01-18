window.addEventListener('DOMContentLoaded', () => {


        //-----------------GET TIME SET--------------------------------
        function getDates(){

            const now = moment()
            const benStokes = moment()
                .set('year', 2020)
                .set('month', 00)
                .set('date',07)
                .set('hour', 15)
                .set('minute', 06)
                .set('seconds', 0)
        
            const days = now.diff(benStokes, 'days') 
            const rawHours = (now.diff(benStokes, 'hours')) 
            const rawMinutes = (now.diff(benStokes, 'minutes')) 
            const rawSeconds = (now.diff(benStokes, 'seconds')) 

            //As I have to subtract the greater time values, it was easier to assign new variables to each time
            const hours = rawHours - (days*24)
            const minutes = rawMinutes - (rawHours*60)
            const seconds = rawSeconds - (rawMinutes*60)
        

        //--------------------------------------------------------------
    
        //++++++++++++++++++GRAB ELEMENTS AND FILL POPULATE+++++++++++++++++

        const containsDays = document.querySelector('.containsDays')
        containsDays.innerHTML = days
        const daysLabel = document.querySelector('.daysLabel')
    
        const containsHours = document.querySelector('.containsHours')
        containsHours.innerHTML = hours
        const hoursLabel = document.querySelector('.hoursLabel')
    
        const containsMins = document.querySelector('.containsMins')
        const minsLabel = document.querySelector('.minsLabel')
        containsMins.innerHTML = minutes
    
        const containsSecs = document.querySelector('.containsSecs')
        const secsLabel = document.querySelector('.secsLabel')
        containsSecs.innerHTML = seconds

        //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



        //________________ FUNCTIONS TO FILL LABELS FOR SINGULAR NUMBERS_______

        function fillSeconds(){
            if (seconds === 1) {
                secsLabel.innerHTML = 'second'
            } else {
                secsLabel.innerHTML = 'seconds'
            }
        }
        fillSeconds()

        function fillMins(){
            if (minutes === 1) {
                minsLabel.innerHTML = 'minute'
            } else {
                minsLabel.innerHTML = 'minutes'
            }
        }
        fillMins()
        function fillHours(){
            if (hours === 1) {
                hoursLabel.innerHTML = 'hour'
            } else {
                hoursLabel.innerHTML = 'hours'
            }
        }
        fillHours()
        function fillDays(){
            if (days === 1) {
                daysLabel.innerHTML = 'day'
            } else {
                daysLabel.innerHTML = 'days'
            }
        }
        fillDays()

        //______________________________________________________________
    }
    getDates()
    setInterval(getDates, 1000)

})