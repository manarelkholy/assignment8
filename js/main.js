var quotes = [
    '"The only way to do great work is to love what you do."',
    '"Innovation distinguishes between a leader and a follower."',
    '"Dont be afraid to give up the good to go for the great. "',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." ',
    '"The future belongs to those who believe in the beauty of their dreams."',
    '"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they are right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together."',
    '"It is better to be hated for what you are than to be loved for what you are not."',
    '"Twenty years from now you will be more disappointed by the things that you did not do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."',
    '"Insanity is doing the same thing, over and over again, but expecting different results."'
];
var autherQoute = [
    '-- Steve Jobs',
    '-- Steve Jobs',
    '-- John D. Rockefeller',
    '-- Winston Churchill',
    '-- Eleanor Roosevelt',
    '-- Marilyn Monroe',
    '-- Andre Gide, Autumn Leaves',
    '-- H. Jackson Brown ',
    '-- Narcotics Anonymous'
];


var quoteElement = document.getElementById("quote");
var autherQouteElement = document.getElementById("autherQoute");
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}
function generateRandomautherQuote() {
    const randomIndex = Math.floor(Math.random() * autherQoute.length);
    autherQouteElement.textContent = autherQoute[randomIndex];
}

