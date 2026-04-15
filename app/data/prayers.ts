import {
  LiturgicalSeason,
  PrayerCategory,
  PrayerRecord,
  PrayerRoute,
  PrayerSubcategory,
  TodayExperience,
} from '@/app/types/prayer';

const jesusImage = require('../../assets/jesus.jpg');
const glowImage = require('../../assets/images/splash-icon.png');
const iconImage = require('../../assets/images/icon.png');
const seasonalImage = require('../../assets/images/android-icon-foreground.png');

const defaultReading = {
  allowTeleprompter: true,
  defaultFontScale: 1,
  minFontScale: 0.9,
  maxFontScale: 1.45,
} as const;

export const prayerCategories: PrayerCategory[] = [
  {
    id: 'daily_prayers',
    title: 'Daily Prayers',
    description: 'Morning, evening, and mercy prayers for a faithful rhythm every day.',
    icon: 'sunny-outline',
    items: [
      {
        id: 'prayer_to_jesus',
        title: 'Prayer to Jesus',
        description: 'Short, direct prayers of trust, surrender, and love for Christ.',
        image: jesusImage,
        icon: 'heart-outline',
        season: 'ordinary_time',
        featuredLabel: 'Daily devotion',
        prayers: [
          {
            id: 'morning-offering',
            title: 'Morning Offering',
            subtitle: 'Start the day with intention',
            excerpt: 'Offer your work, joys, and suffering to Christ before the day begins.',
            content:
              'O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day for all the intentions of Your Sacred Heart, in union with the Holy Sacrifice of the Mass throughout the world, in reparation for my sins, for the intentions of all my relatives and friends, and in particular for the intentions of the Holy Father. Amen.',
            tags: ['Daily', 'Morning', 'Offering'],
            season: 'ordinary_time',
            estimatedDuration: '2 min',
            isFeatured: true,
            defaultFavorite: true,
            searchTerms: ['morning', 'offering', 'jesus', 'daily', 'sacred heart'],
            reading: defaultReading,
          },
          {
            id: 'sacred-heart',
            title: 'Prayer to the Sacred Heart of Jesus',
            subtitle: 'A prayer for trust and consolation',
            excerpt: 'Turn to the Heart of Jesus for humility, protection, and peace.',
            content:
              'O most holy Heart of Jesus, fountain of every blessing, I adore You, I love You, and with lively sorrow for my sins I offer You this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Your will. Grant, good Jesus, that I may live in You and for You. Protect me in the midst of danger; comfort me in my afflictions; give me health of body, assistance in my temporal needs, Your blessing on all that I do, and the grace of a holy death. Amen.',
            tags: ['Jesus', 'Trust', 'Daily'],
            season: 'ordinary_time',
            estimatedDuration: '3 min',
            searchTerms: ['sacred heart', 'jesus', 'trust', 'protection'],
            reading: defaultReading,
          },
          {
            id: 'anima-christi',
            title: 'Anima Christi',
            subtitle: 'A classic prayer after Communion',
            excerpt: 'Ask Christ to sanctify, strengthen, and keep you close to Him.',
            content:
              'Soul of Christ, sanctify me. Body of Christ, save me. Blood of Christ, inebriate me. Water from the side of Christ, wash me. Passion of Christ, strengthen me. O good Jesus, hear me. Within Your wounds hide me. Permit me not to be separated from You. From the wicked foe defend me. At the hour of my death call me and bid me come to You, that with Your saints I may praise You forever and ever. Amen.',
            tags: ['Communion', 'Jesus', 'Classic'],
            season: 'ordinary_time',
            estimatedDuration: '2 min',
            searchTerms: ['anima christi', 'communion', 'sanctify', 'soul of christ'],
            reading: defaultReading,
          },
        ],
      },
      {
        id: 'mercy_prayers',
        title: 'Divine Mercy',
        description: 'Mercy prayers for repentance, healing, and surrender.',
        image: glowImage,
        icon: 'water-outline',
        season: 'ordinary_time',
        featuredLabel: 'Mercy and healing',
        prayers: [
          {
            id: 'divine-mercy-chaplet',
            title: 'Chaplet of Divine Mercy',
            subtitle: 'Pray for mercy on the whole world',
            excerpt: 'A chaplet of intercession rooted in the sorrowful Passion of Christ.',
            content:
              'You expired, Jesus, but the source of life gushed forth for souls and the ocean of mercy opened up for the whole world. Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, in atonement for our sins and those of the whole world. For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
            tags: ['Mercy', 'Chaplet', 'Intercession'],
            season: 'ordinary_time',
            estimatedDuration: '8 min',
            isFeatured: true,
            defaultFavorite: true,
            searchTerms: ['divine mercy', 'chaplet', 'mercy', 'sorrowful passion'],
            reading: defaultReading,
          },
          {
            id: 'act-of-contrition',
            title: 'Act of Contrition',
            subtitle: 'A prayer of repentance',
            excerpt: 'Confess sorrow for sin and resolve to begin again with grace.',
            content:
              'O my God, I am heartily sorry for having offended You, and I detest all my sins because of Your just punishments, but most of all because they offend You, my God, who are all-good and deserving of all my love. I firmly resolve, with the help of Your grace, to sin no more and to avoid the near occasions of sin. Amen.',
            tags: ['Repentance', 'Confession', 'Mercy'],
            season: 'lent',
            estimatedDuration: '1 min',
            searchTerms: ['contrition', 'confession', 'repentance', 'mercy'],
            reading: defaultReading,
          },
        ],
      },
    ],
  },
  {
    id: 'rosary',
    title: 'Rosary',
    description: 'Guided mysteries, Marian prayers, and devotions centered on the life of Christ.',
    icon: 'flower-outline',
    items: [
      {
        id: 'rosary_basics',
        title: 'Rosary Basics',
        description: 'Foundational prayers and structure for the Rosary.',
        image: glowImage,
        icon: 'flower-outline',
        season: 'ordinary_time',
        featuredLabel: 'Begin the Rosary',
        prayers: [
          {
            id: 'how-to-pray-the-rosary',
            title: 'How to Pray the Rosary',
            subtitle: 'Step-by-step Rosary guide',
            excerpt: 'Move through the decades with the Apostles’ Creed, Our Father, Hail Marys, and Glory Be.',
            content:
              'Begin with the Sign of the Cross and the Apostles’ Creed. On the first large bead pray the Our Father. On the next three beads pray three Hail Marys for faith, hope, and charity. Pray the Glory Be, announce the first mystery, pray the Our Father, then ten Hail Marys, the Glory Be, and the Fatima Prayer. Continue through all five mysteries and conclude with the Hail Holy Queen and final prayer.',
            tags: ['Rosary', 'Guide', 'Marian'],
            season: 'ordinary_time',
            estimatedDuration: '5 min',
            isFeatured: true,
            defaultFavorite: true,
            searchTerms: ['rosary', 'guide', 'hail mary', 'our father', 'mysteries'],
            reading: defaultReading,
          },
          {
            id: 'fatima-prayer',
            title: 'Fatima Prayer',
            subtitle: 'Prayer after each decade',
            excerpt: 'A brief plea for mercy and salvation after the Rosary decade.',
            content:
              'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Your mercy. Amen.',
            tags: ['Rosary', 'Fatima', 'Mercy'],
            season: 'ordinary_time',
            estimatedDuration: '1 min',
            searchTerms: ['fatima prayer', 'rosary decade', 'mercy'],
            reading: defaultReading,
          },
        ],
      },
      {
        id: 'marian_devotions',
        title: 'Marian Devotions',
        description: 'Prayers that deepen confidence in Our Lady’s intercession.',
        image: iconImage,
        icon: 'rose-outline',
        season: 'ordinary_time',
        featuredLabel: 'Marian devotion',
        prayers: [
          {
            id: 'queen-of-the-rosary',
            title: 'Queen of the Most Holy Rosary',
            subtitle: 'A Marian prayer of trust',
            excerpt: 'Ask Mary to gather, guide, and strengthen your prayer.',
            content:
              'Queen of the Most Holy Rosary, in these times of brokenness we turn to you with confidence. Gather us beneath your mantle, teach us to contemplate the face of your Son, and strengthen our hearts to pray with faith. May every decade draw us deeper into the mysteries of Christ and make us instruments of peace in the world. Amen.',
            tags: ['Mary', 'Rosary', 'Intercession'],
            season: 'ordinary_time',
            estimatedDuration: '2 min',
            searchTerms: ['queen of the rosary', 'mary', 'rosary', 'intercession'],
            reading: defaultReading,
          },
          {
            id: 'hail-holy-queen',
            title: 'Hail Holy Queen',
            subtitle: 'Concluding Rosary prayer',
            excerpt: 'Entrust your sorrows and hopes to Mary, Mother of Mercy.',
            content:
              'Hail, holy Queen, Mother of mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.',
            tags: ['Mary', 'Rosary', 'Classic'],
            season: 'ordinary_time',
            estimatedDuration: '2 min',
            searchTerms: ['hail holy queen', 'marian', 'rosary conclusion'],
            reading: defaultReading,
          },
        ],
      },
    ],
  },
  {
    id: 'novenas',
    title: 'Novenas',
    description: 'Nine-day devotional prayers for hope, persistence, and specific intentions.',
    icon: 'calendar-outline',
    items: [
      {
        id: 'holy-spirit-novena',
        title: 'Holy Spirit Novena',
        description: 'Prayers for wisdom, courage, and renewal in the Spirit.',
        image: seasonalImage,
        icon: 'flame-outline',
        season: 'easter',
        featuredLabel: 'Nine-day devotion',
        prayers: [
          {
            id: 'come-holy-spirit',
            title: 'Come, Holy Spirit',
            subtitle: 'A prayer for wisdom and renewal',
            excerpt: 'Invite the Holy Spirit to kindle light, strength, and peace in your heart.',
            content:
              'Come, Holy Spirit, fill the hearts of Your faithful and kindle in them the fire of Your love. Send forth Your Spirit and they shall be created. And You shall renew the face of the earth. O God, who by the light of the Holy Spirit did instruct the hearts of the faithful, grant that by the same Holy Spirit we may be truly wise and ever enjoy His consolations. Through Christ our Lord. Amen.',
            tags: ['Novena', 'Holy Spirit', 'Pentecost'],
            season: 'easter',
            estimatedDuration: '2 min',
            isFeatured: true,
            searchTerms: ['holy spirit', 'novena', 'come holy spirit', 'pentecost'],
            reading: defaultReading,
          },
          {
            id: 'holy-spirit-day-two',
            title: 'Holy Spirit Novena Day 2',
            subtitle: 'Pray for understanding',
            excerpt: 'Ask for the Spirit’s gift of understanding in daily life.',
            content:
              'Holy Spirit, Lord of Light, from Your clear celestial height Your pure beaming radiance give. Come, Father of the poor, come with treasures that endure, come, Light of all that live. Grant me understanding so that I may know Your will, discern truth with humility, and walk in peace. Amen.',
            tags: ['Novena', 'Holy Spirit', 'Understanding'],
            season: 'easter',
            estimatedDuration: '3 min',
            searchTerms: ['holy spirit novena', 'understanding', 'gift of spirit'],
            reading: defaultReading,
          },
        ],
      },
      {
        id: 'st-jude-novena',
        title: 'St. Jude Novena',
        description: 'Hope-filled prayers for difficult and desperate situations.',
        image: iconImage,
        icon: 'sparkles-outline',
        season: 'ordinary_time',
        featuredLabel: 'Prayers for hope',
        prayers: [
          {
            id: 'st-jude-opening',
            title: 'St. Jude Opening Prayer',
            subtitle: 'For urgent intentions',
            excerpt: 'Call on St. Jude, patron of impossible causes, with hope and perseverance.',
            content:
              'Most holy Apostle, St. Jude, faithful servant and friend of Jesus, the Church honors and invokes you universally as the patron of hopeless cases and things almost despaired of. Pray for me, who am so miserable. Make use, I implore you, of that particular privilege accorded to you, to bring visible and speedy help where help is almost despaired of. Amen.',
            tags: ['Novena', 'St. Jude', 'Hope'],
            season: 'ordinary_time',
            estimatedDuration: '2 min',
            defaultFavorite: true,
            searchTerms: ['st jude', 'hopeless cases', 'urgent prayer', 'novena'],
            reading: defaultReading,
          },
          {
            id: 'st-jude-thanksgiving',
            title: 'Prayer of Thanksgiving to St. Jude',
            subtitle: 'Give thanks after answered prayer',
            excerpt: 'Offer gratitude after receiving consolation or help through intercession.',
            content:
              'Blessed Apostle, I thank you for your faithful intercession and for the hope you place before those who call upon you. May my gratitude deepen my trust in God, and may I remain steadfast in faith and charity. St. Jude, pray for me and for all who seek God’s merciful help. Amen.',
            tags: ['Novena', 'St. Jude', 'Thanksgiving'],
            season: 'ordinary_time',
            estimatedDuration: '2 min',
            searchTerms: ['st jude thanksgiving', 'answered prayer', 'gratitude'],
            reading: defaultReading,
          },
        ],
      },
    ],
  },
  {
    id: 'saints',
    title: 'Saints',
    description: 'Ask the saints and angels for courage, purity, guidance, and protection.',
    icon: 'shield-checkmark-outline',
    items: [
      {
        id: 'saintly-protection',
        title: 'Protection',
        description: 'Prayers for spiritual defense and courage in daily life.',
        image: seasonalImage,
        icon: 'shield-outline',
        season: 'ordinary_time',
        featuredLabel: 'Protection prayers',
        prayers: [
          {
            id: 'st-michael-prayer',
            title: 'Prayer to Saint Michael',
            subtitle: 'A prayer for spiritual protection',
            excerpt: 'Ask St. Michael to defend you in battle and protect the Church.',
            content:
              'Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly hosts, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.',
            tags: ['Saints', 'Protection', 'Archangel'],
            season: 'ordinary_time',
            estimatedDuration: '2 min',
            isFeatured: true,
            defaultFavorite: true,
            searchTerms: ['saint michael', 'archangel', 'protection', 'battle'],
            reading: defaultReading,
          },
          {
            id: 'guardian-angel',
            title: 'Guardian Angel Prayer',
            subtitle: 'A short prayer for daily guidance',
            excerpt: 'Ask your guardian angel to light, guard, rule, and guide you.',
            content:
              'Angel of God, my guardian dear, to whom God’s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.',
            tags: ['Saints', 'Angel', 'Children'],
            season: 'ordinary_time',
            estimatedDuration: '1 min',
            searchTerms: ['guardian angel', 'angel of god', 'guide', 'protection'],
            reading: defaultReading,
          },
        ],
      },
      {
        id: 'saintly-virtue',
        title: 'Virtue',
        description: 'Prayers for humility, peace, and holy desire.',
        image: jesusImage,
        icon: 'leaf-outline',
        season: 'ordinary_time',
        featuredLabel: 'Grow in holiness',
        prayers: [
          {
            id: 'litany-of-humility',
            title: 'Litany of Humility',
            subtitle: 'Pray for freedom from pride',
            excerpt: 'Let this litany train your heart in humility and holy freedom.',
            content:
              'O Jesus, meek and humble of heart, hear me. From the desire of being esteemed, deliver me, Jesus. From the desire of being loved, deliver me, Jesus. From the desire of being extolled, deliver me, Jesus. That others may be loved more than I, Jesus, grant me the grace to desire it. That others may be esteemed more than I, Jesus, grant me the grace to desire it. Amen.',
            tags: ['Saints', 'Virtue', 'Humility'],
            season: 'lent',
            estimatedDuration: '4 min',
            searchTerms: ['litany of humility', 'humility', 'virtue', 'deliver me jesus'],
            reading: defaultReading,
          },
          {
            id: 'peace-of-st-francis',
            title: 'Prayer of St. Francis',
            subtitle: 'Make me an instrument of Your peace',
            excerpt: 'Seek peace, pardon, faith, and love through the example of St. Francis.',
            content:
              'Lord, make me an instrument of Your peace; where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; and where there is sadness, joy. O Divine Master, grant that I may not so much seek to be consoled as to console; to be understood as to understand; to be loved as to love. For it is in giving that we receive; it is in pardoning that we are pardoned; and it is in dying that we are born to eternal life. Amen.',
            tags: ['Saints', 'Peace', 'St. Francis'],
            season: 'ordinary_time',
            estimatedDuration: '3 min',
            searchTerms: ['st francis', 'peace prayer', 'instrument of peace'],
            reading: defaultReading,
          },
        ],
      },
    ],
  },
  {
    id: 'seasonal_prayers',
    title: 'Current Season',
    description: 'Prayers shaped by the liturgical season and the rhythm of the Church year.',
    icon: 'sparkles-outline',
    season: 'easter',
    items: [
      {
        id: 'easter_prayers',
        title: 'Easter',
        description: 'Prayers celebrating resurrection hope and joy.',
        image: iconImage,
        icon: 'sunny-outline',
        season: 'easter',
        featuredLabel: 'Seasonal focus',
        prayers: [
          {
            id: 'regina-caeli',
            title: 'Regina Caeli',
            subtitle: 'The Easter Marian antiphon',
            excerpt: 'Rejoice with Mary in the risen Christ during Eastertide.',
            content:
              'Queen of Heaven, rejoice, alleluia. For He whom you did merit to bear, alleluia, has risen, as He said, alleluia. Pray for us to God, alleluia. Rejoice and be glad, O Virgin Mary, alleluia. For the Lord is truly risen, alleluia.',
            tags: ['Easter', 'Mary', 'Seasonal'],
            season: 'easter',
            estimatedDuration: '2 min',
            isFeatured: true,
            defaultFavorite: true,
            searchTerms: ['regina caeli', 'easter', 'alleluia', 'queen of heaven'],
            reading: defaultReading,
          },
          {
            id: 'easter-thanksgiving',
            title: 'Easter Thanksgiving',
            subtitle: 'A prayer of gratitude in the Resurrection',
            excerpt: 'Thank Christ for victory over sin and death, and ask for renewed joy.',
            content:
              'Lord Jesus Christ, by Your Resurrection You have conquered sin and death and opened the way to eternal life. Fill my heart with Easter joy, strengthen my faith, and help me walk each day as a witness to Your living presence. Amen.',
            tags: ['Easter', 'Thanksgiving', 'Hope'],
            season: 'easter',
            estimatedDuration: '2 min',
            searchTerms: ['easter thanksgiving', 'resurrection', 'hope'],
            reading: defaultReading,
          },
        ],
      },
      {
        id: 'lent_prayers',
        title: 'Lent',
        description: 'Prayers for repentance, discipline, and renewal.',
        image: seasonalImage,
        icon: 'moon-outline',
        season: 'lent',
        featuredLabel: 'Penance and renewal',
        prayers: [
          {
            id: 'ash-wednesday',
            title: 'Ash Wednesday Prayer',
            subtitle: 'Create in me a clean heart',
            excerpt: 'Begin Lent with repentance and a plea for inward renewal.',
            content:
              'Almighty and everlasting God, You hate nothing You have made and forgive the sins of all who are penitent. Create in me a clean heart, O God, and renew a right spirit within me. Cast me not away from Your presence, and take not Your Holy Spirit from me. Restore to me the joy of Your salvation, and uphold me with a willing spirit. Amen.',
            tags: ['Lent', 'Repentance', 'Seasonal'],
            season: 'lent',
            estimatedDuration: '2 min',
            searchTerms: ['ash wednesday', 'lent', 'repentance', 'clean heart'],
            reading: defaultReading,
          },
          {
            id: 'lenten-renewal',
            title: 'Lenten Renewal Prayer',
            subtitle: 'For fasting, prayer, and charity',
            excerpt: 'Ask for grace to live Lent with sincerity and lasting conversion.',
            content:
              'Merciful Father, in this holy season teach me to fast from distractions, hunger for justice, and return to prayer with a renewed heart. Let my sacrifices become acts of love, and let my repentance bear fruit in mercy toward others. Through Christ our Lord. Amen.',
            tags: ['Lent', 'Renewal', 'Conversion'],
            season: 'lent',
            estimatedDuration: '2 min',
            searchTerms: ['lent', 'renewal', 'fasting', 'conversion'],
            reading: defaultReading,
          },
        ],
      },
    ],
  },
];

const todayExperiences: Record<LiturgicalSeason, TodayExperience> = {
  advent: {
    title: 'Advent',
    subtitle: 'Watchfulness, longing, and hope in the coming of Christ.',
    verse: '“Be watchful! Be alert! You do not know when the time will come.”',
    reference: 'Mark 13:33',
    dailyReading: {
      title: 'Prepare the way',
      reference: 'Isaiah 40:3-5',
      summary: 'Make room in the heart for the Lord with quiet expectancy and repentance.',
    },
    dailyThought:
      'Advent forms a patient heart. Let your waiting become prayer instead of restlessness.',
    season: 'advent',
    featuredPrayerRoute: {
      categoryId: 'daily_prayers',
      subcategoryId: 'prayer_to_jesus',
      prayerId: 'morning-offering',
    },
    seasonalCategoryId: 'seasonal_prayers',
  },
  christmas: {
    title: 'Christmas',
    subtitle: 'Wonder, gratitude, and adoration before the Incarnation.',
    verse: '“The Word became flesh and made his dwelling among us.”',
    reference: 'John 1:14',
    dailyReading: {
      title: 'The Nativity of the Lord',
      reference: 'Luke 2:1-14',
      summary: 'Adore Christ made small for us, and receive His peace with renewed joy.',
    },
    dailyThought:
      'The humility of Bethlehem teaches us that God still comes quietly, lovingly, and near.',
    season: 'christmas',
    featuredPrayerRoute: {
      categoryId: 'daily_prayers',
      subcategoryId: 'prayer_to_jesus',
      prayerId: 'anima-christi',
    },
    seasonalCategoryId: 'seasonal_prayers',
  },
  lent: {
    title: 'Lent',
    subtitle: 'Repentance, simplicity, and return to the Father.',
    verse: '“Return to me with your whole heart, with fasting, weeping, and mourning.”',
    reference: 'Joel 2:12',
    dailyReading: {
      title: 'Return with your whole heart',
      reference: 'Joel 2:12-18',
      summary: 'Lent invites us to strip away self-reliance and come home to grace.',
    },
    dailyThought:
      'Choose one small act of hidden charity today. Lent matures when it makes us more merciful.',
    season: 'lent',
    featuredPrayerRoute: {
      categoryId: 'seasonal_prayers',
      subcategoryId: 'lent_prayers',
      prayerId: 'ash-wednesday',
    },
    seasonalCategoryId: 'seasonal_prayers',
  },
  holy_week: {
    title: 'Holy Week',
    subtitle: 'Walk closely with Christ in His Passion.',
    verse: '“Father, if you are willing, take this cup away from me; still, not my will but yours be done.”',
    reference: 'Luke 22:42',
    dailyReading: {
      title: 'The Passion of the Lord',
      reference: 'Luke 22:14-23:56',
      summary: 'Remain with Christ in His suffering and learn the love that does not turn away.',
    },
    dailyThought:
      'Holy Week is not rushed. Slow your pace and stay present to the sacrifice of Christ.',
    season: 'holy_week',
    featuredPrayerRoute: {
      categoryId: 'daily_prayers',
      subcategoryId: 'mercy_prayers',
      prayerId: 'act-of-contrition',
    },
    seasonalCategoryId: 'seasonal_prayers',
  },
  easter: {
    title: 'Easter',
    subtitle: 'Resurrection joy, renewed hope, and the victory of Christ.',
    verse:
      '“I am the resurrection and the life; whoever believes in me, though he die, yet shall he live.”',
    reference: 'John 11:25',
    dailyReading: {
      title: 'The Resurrection',
      reference: 'John 20:1-18',
      summary: 'Let the empty tomb renew your courage, hope, and confidence in the living Christ.',
    },
    dailyThought:
      'Resurrection joy is not denial of pain. It is confidence that grace has the final word.',
    season: 'easter',
    featuredPrayerRoute: {
      categoryId: 'seasonal_prayers',
      subcategoryId: 'easter_prayers',
      prayerId: 'regina-caeli',
    },
    seasonalCategoryId: 'seasonal_prayers',
  },
  ordinary_time: {
    title: 'Ordinary Time',
    subtitle: 'Faithful prayer in the quiet holiness of ordinary days.',
    verse: '“Whoever remains in me and I in him will bear much fruit.”',
    reference: 'John 15:5',
    dailyReading: {
      title: 'Abide in me',
      reference: 'John 15:1-8',
      summary: 'Holiness grows through steady faithfulness, not only extraordinary moments.',
    },
    dailyThought:
      'Ordinary Time is where most saints are made: in repeated fidelity, hidden work, and daily prayer.',
    season: 'ordinary_time',
    featuredPrayerRoute: {
      categoryId: 'daily_prayers',
      subcategoryId: 'prayer_to_jesus',
      prayerId: 'morning-offering',
    },
    seasonalCategoryId: 'seasonal_prayers',
  },
};

export function getCurrentSeason(date = new Date()): LiturgicalSeason {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month === 12) {
    return day >= 25 ? 'christmas' : 'advent';
  }

  if (month === 1) {
    return 'christmas';
  }

  if (month === 3) {
    return 'lent';
  }

  if (month === 4) {
    return day <= 5 ? 'holy_week' : 'easter';
  }

  if (month === 5) {
    return 'easter';
  }

  return 'ordinary_time';
}

export const homeVerse = getTodayExperience();

export function getTodayExperience(date = new Date()): TodayExperience {
  return todayExperiences[getCurrentSeason(date)];
}

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

export function getAllPrayerRecords(): PrayerRecord[] {
  return prayerCategories.flatMap((category) =>
    category.items.flatMap((subcategory) =>
      subcategory.prayers.map((prayer) => ({
        category,
        subcategory,
        prayer,
        route: {
          categoryId: category.id,
          subcategoryId: subcategory.id,
          prayerId: prayer.id,
        },
      })),
    ),
  );
}

export function getPrayerRecordById(prayerId: string) {
  return getAllPrayerRecords().find((record) => record.prayer.id === prayerId);
}

export function getPrayerRecord(route: PrayerRoute) {
  return getAllPrayerRecords().find(
    (record) =>
      record.route.categoryId === route.categoryId &&
      record.route.subcategoryId === route.subcategoryId &&
      record.route.prayerId === route.prayerId,
  );
}

export function getDefaultFavoriteIds() {
  return getAllPrayerRecords()
    .filter((record) => record.prayer.defaultFavorite)
    .map((record) => record.prayer.id);
}

export function getFeaturedPrayerRecords() {
  return getAllPrayerRecords().filter((record) => record.prayer.isFeatured);
}

export function getPrayersForCategory(categoryId: string) {
  return getAllPrayerRecords().filter((record) => record.category.id === categoryId);
}

export function getFavoritePrayerRecords(favoriteIds: string[]) {
  return getAllPrayerRecords().filter((record) => favoriteIds.includes(record.prayer.id));
}

export function searchPrayerRecords(query: string, filter: string) {
  const normalizedQuery = query.trim().toLowerCase();

  return getAllPrayerRecords().filter((record) => {
    const matchesFilter =
      filter === 'all' ||
      record.category.id === filter ||
      record.prayer.season === filter ||
      record.subcategory.season === filter;

    if (!matchesFilter) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      record.prayer.title,
      record.prayer.subtitle,
      record.prayer.excerpt,
      ...record.prayer.searchTerms,
      record.subcategory.title,
      record.subcategory.description,
      record.category.title,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function getNextPrayer(route: PrayerRoute) {
  const subcategory = getSubcategoryById(route.categoryId, route.subcategoryId);

  if (!subcategory) {
    return undefined;
  }

  const currentIndex = subcategory.prayers.findIndex((prayer) => prayer.id === route.prayerId);

  if (currentIndex === -1 || currentIndex === subcategory.prayers.length - 1) {
    return undefined;
  }

  const nextPrayer = subcategory.prayers[currentIndex + 1];

  return {
    prayer: nextPrayer,
    route: {
      categoryId: route.categoryId,
      subcategoryId: route.subcategoryId,
      prayerId: nextPrayer.id,
    },
  };
}

export function getSeasonLabel(season: LiturgicalSeason) {
  switch (season) {
    case 'advent':
      return 'Advent';
    case 'christmas':
      return 'Christmas';
    case 'lent':
      return 'Lent';
    case 'holy_week':
      return 'Holy Week';
    case 'easter':
      return 'Easter';
    default:
      return 'Ordinary Time';
  }
}
