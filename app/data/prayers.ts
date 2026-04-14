import { Prayer } from '@/app/types/prayer';

export const prayers: Prayer[] = [
  {
    id: 'morning-offering',
    slug: 'morning-offering',
    title: 'Morning Offering',
    category: 'daily',
    duration: '2 min',
    excerpt: 'A simple prayer to place the whole day before God.',
    tags: ['Daily', 'Morning', 'Offering'],
    content:
      'O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day for all the intentions of Your Sacred Heart, in union with the Holy Sacrifice of the Mass throughout the world, in reparation for my sins, for the intentions of all my relatives and friends, and in particular for the intentions of the Holy Father. Amen.',
  },
  {
    id: 'angelus',
    slug: 'angelus',
    title: 'The Angelus',
    category: 'daily',
    duration: '4 min',
    excerpt: 'A traditional midday remembrance of the Incarnation.',
    tags: ['Daily', 'Marian', 'Scripture'],
    content:
      'V. The Angel of the Lord declared unto Mary.\nR. And she conceived of the Holy Spirit.\n\nHail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus.\nHoly Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.\n\nV. Behold the handmaid of the Lord.\nR. Be it done unto me according to thy word.\n\nHail Mary...\n\nV. And the Word was made flesh.\nR. And dwelt among us.\n\nHail Mary...\n\nV. Pray for us, O holy Mother of God.\nR. That we may be made worthy of the promises of Christ.\n\nLet us pray.\nPour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we, to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.',
  },
  {
    id: 'act-of-contrition',
    slug: 'act-of-contrition',
    title: 'Act of Contrition',
    category: 'daily',
    duration: '1 min',
    excerpt: 'A prayer of repentance and trust in God’s mercy.',
    tags: ['Daily', 'Confession', 'Mercy'],
    content:
      'O my God, I am heartily sorry for having offended You, and I detest all my sins because of Your just punishments, but most of all because they offend You, my God, who are all-good and deserving of all my love. I firmly resolve, with the help of Your grace, to sin no more and to avoid the near occasions of sin. Amen.',
  },
  {
    id: 'holy-rosary-opening',
    slug: 'holy-rosary-opening',
    title: 'Rosary Opening Prayers',
    category: 'rosary',
    duration: '5 min',
    excerpt: 'The Apostles’ Creed, Our Father, and opening Hail Marys.',
    tags: ['Rosary', 'Marian', 'Meditation'],
    content:
      'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.\n\nI believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord...\n\nOur Father, who art in heaven, hallowed be Thy name...\n\nHail Mary, full of grace, the Lord is with thee...',
  },
  {
    id: 'divine-mercy-chaplet',
    slug: 'divine-mercy-chaplet',
    title: 'Divine Mercy Chaplet',
    category: 'mercy',
    duration: '10 min',
    excerpt: 'A chaplet asking for mercy on us and on the whole world.',
    tags: ['Mercy', 'Chaplet', 'Intercession'],
    content:
      'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world.\n\nEternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, our Lord Jesus Christ, in atonement for our sins and those of the whole world.\n\nFor the sake of His sorrowful Passion, have mercy on us and on the whole world.',
  },
  {
    id: 'litany-of-humility',
    slug: 'litany-of-humility',
    title: 'Litany of Humility',
    category: 'devotions',
    duration: '6 min',
    excerpt: 'A devotional prayer asking for a humble heart.',
    tags: ['Litany', 'Virtue', 'Formation'],
    content:
      'O Jesus! meek and humble of heart, hear me.\n\nFrom the desire of being esteemed, deliver me, Jesus.\nFrom the desire of being loved, deliver me, Jesus.\nFrom the desire of being extolled, deliver me, Jesus.\n\nThat others may be loved more than I, Jesus, grant me the grace to desire it.\nThat others may be esteemed more than I, Jesus, grant me the grace to desire it.',
  },
  {
    id: 'st-michael-prayer',
    slug: 'st-michael-prayer',
    title: 'Prayer to Saint Michael',
    category: 'saints',
    duration: '2 min',
    excerpt: 'A prayer for protection and spiritual strength.',
    tags: ['Saints', 'Protection', 'Evening'],
    content:
      'Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the heavenly hosts, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.',
  },
  {
    id: 'guardian-angel',
    slug: 'guardian-angel',
    title: 'Guardian Angel Prayer',
    category: 'saints',
    duration: '1 min',
    excerpt: 'A brief prayer for guidance and protection throughout the day.',
    tags: ['Saints', 'Children', 'Protection'],
    content:
      'Angel of God, my guardian dear, to whom God’s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.',
  },
];

export const featuredPrayerIds = [
  'morning-offering',
  'divine-mercy-chaplet',
  'st-michael-prayer',
];
