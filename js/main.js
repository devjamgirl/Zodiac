

 var horoscope = [
   {
    sign: 'leo',
    image: 'img/leo-zodiac-sign.png',
    date: 'July 23 - August 22',
    personalitytrait: 'Passionate and Fiery'
  },
  {
   sign: 'aries',
   image: 'img/aries-sign.png',
   date: 'March 21 - April 19',
   personalitytrait:'Confident and Optimistic'
 },
 {
  sign: 'scorpio',
  image: 'img/scorpio-sign.png',
  date: 'October 23 - November 21',
  personalitytrait:'Resourceful and Brave'
},
{
 sign: 'cancer',
 image: 'img/cancer-sign.png',
 date: 'June 21 - July 22',
 personalitytrait: 'Tenacious and Moody'
},
{
 sign: 'virgo',
 image: 'img/virgo-sign.png',
 date: 'August 23 - September 22',
 personalitytrait:'Loyal and Shy'
},
{
 sign: 'sagittarus',
 image: 'img/sagittarus-sign.png',
 date: 'November 22 - December 21',
 personalitytrait:'Generous and Impatient'
},
{
 sign: 'gemini',
 image: 'img/leo-zodiac-sign.png',
 date: 'May 21 - June 20',
 personalitytrait:'Affectionate and Nervous'
},
{
 sign: 'libra',
 image: 'img/leo-zodiac-sign.png',
 date: '$45,000',
 personalitytrait:'Cooperative and Indecisive'
},
{
 sign: 'pisces',
 image: 'img/pisces-sign.png',
 date: 'February 19 - March 20',
 personalitytrait:'Compassionate and Fearful'
},
{
  sign: 'taurus',
  image: 'img/taurus-sign.png',
  date: 'April 20 - May 20',
  personalitytrait: 'Reliable and Stubborn'
},
{
    sign: 'aquarius',
    image: 'img/pisces-sign.png',
    date:'alkfnsd',
    personalitytrait:'Progressive and Temperamental'
  }
];
 function getZodiac(){
   var body = document.getElementById('body');

//grab input value
   var input = document.getElementById('input').value;

   //change all input to lowercase
   var lowerCase = input.toLowerCase();

//run array and if input matches something in array then do the following
   for (i = 0; i < horoscope.length; i++){
     if (lowerCase == horoscope[i].sign){

       var signHead = document.getElementById('signHead').textContent = horoscope[i].sign;
       var img = document.getElementById('img').src = horoscope[i].image;
       var DateRange = document.getElementById('DateRange').textContent = horoscope[i].date;
       var personality = document.getElementById('personality').textContent = horoscope[i].personalitytrait;
       return

     }
   }
 }

getZodiac();
