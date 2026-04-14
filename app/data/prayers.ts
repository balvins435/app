import { PrayerCategory, PrayerSubcategory } from '@/app/types/prayer';

const jesusImage = require('../../assets/jesus.jpg');
const glowImage = require('../../assets/images/splash-icon.png');
const iconImage = require('../../assets/images/icon.png');
const androidForeground = require('../../assets/images/android-icon-foreground.png');

export const prayerCategories: PrayerCategory[] = [
  {
    id: 'daily_prayers',
    title: 'Daily Prayers',
    description: 'A curated collection for morning, evening, and devotional prayer throughout the day.',
    items: [
      {
        id: 'prayer_to_jesus',
        title: 'Prayer to Jesus',
        description: 'Simple daily prayers centered on trust, surrender, and love for Christ.',
        image: jesusImage,
        icon: 'heart-outline',
        prayers: [
          {
            id: 'morning-offering',
            title: 'Morning Offering',
            content:
              'O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day for all the intentions of Your Sacred Heart, in union with the Holy Sacrifice of the Mass throughout the world, in reparation for my sins, for the intentions of all my relatives and friends, and in particular for the intentions of the Holy Father. Amen.',
          },
          {
            id: 'sacred-heart',
            title: 'Prayer to the Sacred Heart of Jesus',
            content:
              'O most holy Heart of Jesus, fountain of every blessing, I adore You, I love You, and with lively sorrow for my sins I offer You this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Your will. Grant, good Jesus, that I may live in You and for You. Protect me in the midst of danger; comfort me in my afflictions; give me health of body, assistance in my temporal needs, Your blessing on all that I do, and the grace of a holy death. Amen.',
          },
          {
            id: 'anima-christi',
            title: 'Anima Christi',
            content:
              'Soul of Christ, sanctify me. Body of Christ, save me. Blood of Christ, inebriate me. Water from the side of Christ, wash me. Passion of Christ, strengthen me. O good Jesus, hear me. Within Your wounds hide me. Permit me not to be separated from You. From the wicked foe defend me. At the hour of my death call me and bid me come to You, that with Your saints I may praise You forever and ever. Amen.',
          },
        ],
      },
      {
        id: 'rosary',
        title: 'Rosary',
        description: 'Meditations and prayers for a reflective Rosary devotion.',
        image: glowImage,
        icon: 'flower-outline',
        prayers: [
          {
            id: 'how-to-pray-the-rosary',
            title: 'How to Pray the Rosary',
            content:
              'Begin with the Sign of the Cross and the Apostles’ Creed. On the first large bead pray the Our Father. On the next three beads pray three Hail Marys for faith, hope, and charity. Pray the Glory Be, announce the first mystery, pray the Our Father, then ten Hail Marys, the Glory Be, and the Fatima Prayer. Continue through all five mysteries and conclude with the Hail Holy Queen and final prayer.',
          },
          {
            id: 'queen-of-the-rosary',
            title: 'Queen of the Most Holy Rosary',
            content:
              'Queen of the Most Holy Rosary, in these times of brokenness we turn to you with confidence. Gather us beneath your mantle, teach us to contemplate the face of your Son, and strengthen our hearts to pray with faith. May every decade draw us deeper into the mysteries of Christ and make us instruments of peace in the world. Amen.',
          },
          {
            id: 'fatima-prayer',
            title: 'Fatima Prayer',
            content:
              'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Your mercy. Amen.',
          },
        ],
      },
      {
        id: 'divine_mercy',
        title: 'Divine Mercy',
        description: 'Prayers of mercy, repentance, and confident surrender.',
        image: androidForeground,
        icon: 'water-outline',
        prayers: [
          {
            id: 'divine-mercy-chaplet',
            title: 'Chaplet of Divine Mercy',
            content:
              'You expired, Jesus, but the source of life gushed forth for souls and the ocean of mercy opened up for the whole world. Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, in atonement for our sins and those of the whole world. For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
          },
          {
            id: 'act-of-contrition',
            title: 'Act of Contrition',
            content:
              'O my God, I am heartily sorry for having offended You, and I detest all my sins because of Your just punishments, but most of all because they offend You, my God, who are all-good and deserving of all my love. I firmly resolve, with the help of Your grace, to sin no more and to avoid the near occasions of sin. Amen.',
          },
        ],
      },
    ],
  },
  {
    id: 'seasonal_prayers',
    title: 'Occasions & Intentions',
    description: 'Prayer companions for Easter, Lent, and the liturgical rhythm of the Church.',
    items: [
      {
        id: 'easter_prayers',
        title: 'Easter',
        description: 'Prayers celebrating resurrection hope and renewed joy.',
        image: iconImage,
        icon: 'sunny-outline',
        prayers: [
          {
            id: 'regina-caeli',
            title: 'Regina Caeli',
            content:
              'Queen of Heaven, rejoice, alleluia. For He whom you did merit to bear, alleluia, has risen, as He said, alleluia. Pray for us to God, alleluia. Rejoice and be glad, O Virgin Mary, alleluia. For the Lord is truly risen, alleluia.',
          },
          {
            id: 'easter-thanksgiving',
            title: 'Easter Thanksgiving',
            content:
              'Lord Jesus Christ, by Your Resurrection You have conquered sin and death and opened the way to eternal life. Fill my heart with Easter joy, strengthen my faith, and help me walk each day as a witness to Your living presence. Amen.',
          },
        ],
      },
      {

        id: 'lent_prayers',
        title: 'Lent',
        description: 'Prayers for repentance, renewal, and spiritual growth during Lent.',
        image: iconImage,
        icon: 'moon-outline',
        prayers: [
          {
            id: 'ash-wednesday',
            title: 'Ash Wednesday Prayer',
            content:
              'Almighty and everlasting God, You hate nothing You have made and forgive the sins of all who are penitent. Create in me a clean heart, O God, and renew a right spirit within me. Cast me not away from Your presence, and take not Your Holy Spirit from me. Restore to me the joy of Your salvation, and uphold me with a willing spirit. Amen.',
          },
          {
            id: 'st-francis-lent',
            title: 'St. Francis Lent Prayer',
            content:
              'Lord, make me an instrument of Your peace; where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; and where there is sadness, joy. O Divine Master, grant that I may not so much seek to be consoled as to console; to be understood as to understand; to be loved as to love. For it is in giving that we receive; it is in pardoning that we are pardoned; and it is in dying that we are born to eternal life. Amen.',
          },
        ],

      },
    ],
  },
  {
    id: 'catechism',
    title: 'Catechism',
    description: 'Prayers drawn from the rich teachings of the Catholic Church.',
    items: [
      {
        id: 'basic_prayers',
        title: 'Basic Prayers',
        description: 'Essential prayers for daily spiritual life.',
        image: iconImage,
        icon: 'book-outline',
        prayers: [
          {
            id: 'lord-prayer',
            title: 'Lord\'s Prayer',
            content:
              'Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread. And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation; but deliver us from evil. Amen.',
          },
          {
            id: 'hail-mary',
            title: 'Hail Mary',
            content:
              'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
          },
          {
            id: 'glory-be',
            title: 'Glory Be',
            content:
              'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',    

          },
          {
            id: 'nicene-creed',
            title: 'Nicene Creed',
            content:
              'I believe in one God, the Father Almighty, Maker of heaven and earth, of all things visible and invisible. I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages; Light from Light, true God from true God; begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate; He suffered  death and was buried; and  rose again on the third day in accordance with the Scriptures. He ascended into heaven, and  is seated at the right hand of the Father. He will come again, in glory, to judge the living and the dead; and his kingdom will have no end. I believe in the Holy Spirit, the Lord and the Giver of Life, who proceeds from the Father and the Son; who with the Father and the Son is adored and glorified; who has spoken through the prophets. I believe in one holy catholic and apostolic Church. I confess one baptism for the forgiveness of sins. And I look forward to the resurrection of the dead, and the life of the world to come. Amen.',
          },
          {
            id: 'apostles-creed',
            title: 'Apostles Creed',
            content:
              'I believe in God, the Father Almighty, Creator of heaven and earth. I believe in Jesus Christ, His only Son, our Lord. He was conceived by the Holy Spirit and born of the Virgin Mary. He suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father Almighty; from there He will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',  
          
          },
        ],
        
      },
      {
        id: 'catholic-doctrine',
        title: 'Catholic Doctrine',
        description: 'Prayers reflecting key teachings of the Church.',
        image: iconImage,
        icon: 'school-outline',
        prayers: [
          {
            id: 'prayer-to-the-holy-spirit',
            title: 'Prayer to the Holy Spirit',
            content:
              'Come, Holy Spirit, fill the hearts of Your faithful and kindle in them the fire of Your love. Send forth Your Spirit and they shall be created. And You shall renew the face of the earth. O God, who by the light of the Holy Spirit did instruct the hearts of the faithful, grant that by the same Holy Spirit we may be truly wise and ever enjoy His consolations. Through Christ our Lord. Amen.',
          },
        ],
      }
    ],
  }
];

export const homeVerse = {
  title: 'Easter',
  verse:
    '“I am the resurrection and the life; whoever believes in me, though he die, yet shall he live.”',
  reference: 'John 11:25',
};

export function getCategoryById(categoryId: string) {
  return prayerCategories.find((category) => category.id === categoryId);
}

export function getSubcategoryById(categoryId: string, subcategoryId: string) {
  return getCategoryById(categoryId)?.items.find((item) => item.id === subcategoryId);
}

export function getPrayerById(categoryId: string, subcategoryId: string, prayerId: string) {
  return getSubcategoryById(categoryId, subcategoryId)?.prayers.find((prayer) => prayer.id === prayerId);
}

export function getPrayerCount(item: PrayerSubcategory) {
  return item.prayers.length;
}
