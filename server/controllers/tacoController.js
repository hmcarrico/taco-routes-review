const tacoBrowse = [
    {
        url: 'https://thepointsguy.com/wp-content/uploads/2015/04/Tacos-A-Go-Go.jpg'
    },
    {
        url: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/4/14/campaign_images/webdr08/delicious-taco-recipes-2-9609-1412446422-22_dblbig.jpg'
    },
    {
        url: 'http://mediad.publicbroadcasting.net/p/kwmu/files/styles/x_large/public/201508/tacos.jpg'
    },
];

const tacoEspeciales = [
    {
        url: 'https://www.deltaco.com/images/specials/2018promo11/21218_2018promo11_special01.jpg'
    },
    {
        url: 'https://mallimages.mallfinder.com/sales/2137069800/chronic-tacos---daily-specials.JPG'
    },
    {
        url: 'https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://res.cloudinary.com/simpleview/image/upload/crm/sandysprings/huey-luey-s-Taco-Tuesday-resized-9d102a4d5056b3a_9d102b26-5056-b3a8-498fc8b831e6f901.jpg'
    },
];

const tacoMemes = [
    {
        url: 'https://www.laughtard.com/wp-content/uploads/2018/10/153ffde6e5e4986abd1f3294ed43bf6c-taco-humor-taco-funny.jpg'
    },
    {
        url: 'https://i.imgur.com/Pid7YCT.jpg'
    },
    {
        url: 'https://www.sheknows.com/wp-content/uploads/2018/08/mulxtkytiqkd9j4jk3yz.jpeg'
    },
];

module.exports = {
    tacoBrowse: (req, res) => {
        res.status(200).send(tacoBrowse)
    },
    tacoEspeciales: (req, res) => {
        res.status(200).send(tacoEspeciales)
    },
    tacoMemes: (req, res) => {
        res.status(200).send(tacoMemes)
    },
}