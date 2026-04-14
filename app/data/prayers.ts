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
    title: 'Seasonal Prayers',
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
    ],
  },
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
