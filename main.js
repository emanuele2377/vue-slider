const { createApp } = Vue;

const slides = [
    {
        immagine: 'https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-787.jpg',
        nome: 'Smartphone XYZ',
        descrizione: 'Uno smartphone potente con caratteristiche avanzate e display nitido.',
        prezzo: 499.99
    },
    {
        immagine: 'https://img.freepik.com/free-psd/laptop-blue-background-mock-up_1022-178.jpg',
        nome: 'Laptop ABC',
        descrizione: 'Un laptop leggero e performante, ideale per la produttività in movimento.',
        prezzo: 899.99
    },
    {
        immagine: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg',
        nome: 'Fotocamera 123',
        descrizione: 'Una fotocamera professionale con alta risoluzione e molte funzionalità.',
        prezzo: 699.99
    }
];


const opzioni = {
    data: function () {
        return {
            nome : [
            'Smartphone XYZ',
             'Laptop ABC',
             'Fotocamera 123'],
            descrizione: [
                'Uno smartphone potente con caratteristiche avanzate e display nitido.',
                'Un laptop leggero e performante, ideale per la produttività in movimento.',
                'Una fotocamera professionale con alta risoluzione e molte funzionalità.'
            ],
            prezzo: [
                '499.99',
                '899.99',
                '699.99'
            ],
            immagine: [
                'https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-787.jpg' ,
                'https://img.freepik.com/free-psd/laptop-blue-background-mock-up_1022-178.jpg',
                'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg'
            ],

          slideNumber: 0

        }
        },


        methods: {
            back() {
                let indiceUltimaImg = this.immagine.length-1;
    
                if(this.slideNumber > 0) {
                    this.slideNumber--;
                } else {
                    this.slideNumber = indiceUltimaImg;
                }
            },
            next() {
                let indiceUltimaImg = this.immagine.length-1;
    
                if(this.slideNumber < indiceUltimaImg) {
                    this.slideNumber++;
                } else {
                    this.slideNumber = 0;
                }
            }

    }
}
createApp(opzioni).mount('#app')
