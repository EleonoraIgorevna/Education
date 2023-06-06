enum Membership
{
    Simple,
    Standart,
    Premium
}

let membership = Membership.Standart;
console.log(membership); //Тут получим единицу

let membershipReverse = Membership[2];
console.log(membership); //Тут получим Premium


///////////////////////////////////

enum SocialMedia
{
    //Явное указание
    VK = "VK",
    FaceBook = "FaceBook",
    Instagram = "Instagram"
}

let socialMedia = SocialMedia.Instagram;
console.log(socialMedia); //Тут получим Instagram

///////////////////////////////////